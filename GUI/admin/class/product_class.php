<?php
include "database.php";
?>

<?php

class product {
    private $db;

    public function __construct() 
    {
        $this -> db = new Database();
    }


    public function show_category(){
        $query = "SELECT * FROM tbl_category ORDER BY category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }

    public function show_product_category(){
        // $query = "SELECT * FROM tbl_product_category ORDER BY category_id DESC";
        $query = "SELECT * FROM tbl_product_category INNER JOIN tbl_category ON tbl_product_category.category_id = tbl_category.category_id
        ORDER BY product_category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }



    public function show_product_category_ajax($category_id){
        $query = "SELECT * FROM tbl_product_category WHERE category_id = '$category_id'";
        $result = $this ->db->select($query);
        return $result;
    }

    public function show_all_product($product_id){
        $query = "SELECT * FROM tbl_product ORDER BY product_category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }

    public function show_product($product_id){
        $query = "SELECT * FROM tbl_product WHERE product_id = '$product_id' ORDER BY product_category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }

    public function show_product_description_img($product_id){
        $query = "SELECT * FROM product_description_img WHERE product_id = '$product_id' ORDER BY product_category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }

    public function insert_product() {
        $category_id = $_POST['category_id'];
        $product_category_id = $_POST['product_category_id'];
        $product_name = $_POST['product_name'];
        $product_price = $_POST['product_price'];
        $product_price_discount = $_POST['product_price_discount'];
        $product_description = $_POST['product_description'];
        $product_img = $_FILES['product_img']['name'];
        
        $filetarget = basename($_FILES['product_img']['name']);
        $filetype = strtolower(pathinfo($product_img, PATHINFO_EXTENSION));
        if (file_exists("uploads/$filetarget")){
            $alert = 'File đã tồn tại';
            return $alert;
        }
        else {
            if($filetype != "jpg" && $filetype != "jpeg" && $filetype != "png"){
                $alert = 'file không hợp lệ (jpg, png, jpeg';
                return $alert;
            }
            else {
                move_uploaded_file($_FILES['product_img']['tmp_name'],"uploads/".$_FILES['product_img']['name']);


                $query = "INSERT INTO tbl_product (
                    category_id,
                    product_category_id,
                    product_name,
                    product_price,
                    product_price_discount,
                    product_description,
                    product_img) 
                    VALUES (
                    '$category_id',
                    '$product_category_id',
                    '$product_name',
                    '$product_price',
                    '$product_price_discount',
                    '$product_description',
                    '$product_img')";                                   
                $result = $this ->db->insert($query);
                if($result){
                    $query = "SELECT * FROM tbl_product ORDER BY product_id DESC LIMIT 1";
                    $result = $this -> db -> select($query)-> fetch_assoc();
                    $product_id = $result['product_id'];
                    $filename = $_FILES['product_description_img']['name'];
                    $filetmp = $_FILES['product_description_img']['tmp_name'];
        
        
                    foreach ($filename as $key => $value) {
                        move_uploaded_file($filetmp[$key],"uploads/".$value);
                        $query = "INSERT INTO tbl_product_description_img (product_id, product_description_img) VALUES ('$product_id', '$value')"; 
                        $result = $this ->db->insert($query); 
                    }
        
                }
            }
            
        }



        
        

        return $result;
    }










    public function get_product_category1($product_category_id){
        $query1 = "SELECT * FROM tbl_category WHERE category_name = (SELECT category_name FROM tbl_category WHERE category_id = (SELECT category_id FROM tbl_product_category WHERE product_category_id = '$product_category_id'))";
        $result1 = $this ->db->select($query1);
        return $result1;
    }


    public function update_product_category($product_category_name, $product_category_id, $category_id){
        $query = "UPDATE tbl_product_category SET product_category_name = '$product_category_name', category_id = '$category_id' WHERE product_category_id = '$product_category_id'";
        $result = $this ->db->update($query);
        header('location:product_category_list.php');
        return $result;
    }

    // public function update_product_category($product_category_name, $product_category_id) {
    //     $category_id = $this->detect_category_id($product_category_id);
    //     $query = "UPDATE tbl_product_category 
    //               SET product_category_name = '$product_category_name', category_id = '$category_id' 
    //               WHERE product_category_id = '$product_category_id'";
    //     $result = $this->db->update($query);
    //     header('Location: product_category_list.php');
    //     return $result;
    // }

    // private function detect_category_id($product_category_id) {
    //     $query = "SELECT category_id 
    //               FROM tbl_product_category 
    //               WHERE product_category_id = '$product_category_id'";
    //     $result = $this->db->select($query);
    //     $row = $result->fetch_assoc();
    //     return $row['category_id'];
    // }

    public function delete_product_category($product_category_id){
        $query = "DELETE FROM tbl_product_category WHERE product_category_id = '$product_category_id'";
        $result = $this ->db->delete($query);
        header('location:product_category_list.php');
        return $result;
    }
}

?>