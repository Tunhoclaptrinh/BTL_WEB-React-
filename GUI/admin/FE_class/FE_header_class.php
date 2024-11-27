<?php
include "database.php";
?>

<?php

class category {
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


        public function get_category($category_id){
            $query = "SELECT * FROM tbl_category WHERE category_id = '$category_id'";
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


        public function get_product_category($product_category_id){
            $query = "SELECT * FROM tbl_product_category WHERE product_category_id = '$product_category_id'";
            $result = $this ->db->select($query);
            return $result;
        }


    }

?>