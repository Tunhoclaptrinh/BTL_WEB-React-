<?php
include "database.php";
?>

<?php

class product_category {
    private $db;

    public function __construct() 
    {
        $this -> db = new Database();
    }


    public function insert_product_category($category_id, $product_category_name) {
        $query = "INSERT INTO tbl_product_category (category_id, product_category_name) VALUES ('$category_id','$product_category_name')";
        $result = $this ->db->insert($query);
        return $result;
    }


    public function show_product_category(){
        // $query = "SELECT * FROM tbl_product_category ORDER BY category_id DESC";
        $query = "SELECT * FROM tbl_product_category INNER JOIN tbl_category ON tbl_product_category.category_id = tbl_category.category_id
        ORDER BY product_category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }


    public function show_category(){
        $query = "SELECT * FROM tbl_category ORDER BY category_id DESC";
        $result = $this ->db->select($query);
        return $result;
    }


    public function get_product_category($product_category_id){
        $query = "SELECT * FROM tbl_product_category WHERE product_category_id = '$product_category_id'";
        $result = $this ->db->select($query);
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