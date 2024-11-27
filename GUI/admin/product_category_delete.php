<?php
include "header.php";
include "slider.php";
include "class/product_category_class.php";
?>


<?php 
$product_category = new product_category;
if (!isset($_GET['product_category_id']) || $_GET['product_category_id'] == NULL){
    echo"<script>window.location = 'product_category_list.php' </script>";
}
else {
    $product_category_id = $_GET['product_category_id'];
}
$get_product_category = $product_category -> get_product_category($product_category_id);
$get_product_category1 = $product_category -> get_product_category1($product_category_id);
if ($get_product_category) {
    $result = $get_product_category -> fetch_assoc();
    $result1 = $get_product_category1 -> fetch_assoc();
}
?> 

<?php
$product_category = new product_category;
if($_SERVER["REQUEST_METHOD"] === 'POST'){
    $update_product_category = $product_category ->delete_product_category($product_category_id);
    // var_dump($_POST);
}

?>

<div class="admin-content-right">
        <div class="admin-content-right-product-category-delete">
            <h1>DELETE CATEGORY</h1>
            <form action="" method="POST">
                <p><a>category_name:</a> <a><?php echo $result1['category_name']?></a></p>
                <p><a>product_category_id:</a> <a><?php echo $result['product_category_id']?></a></p>
                <p><a>product_category_name:</a> <a><?php echo $result['product_category_name']?></a></p>                
                <button type="submit">DELETE</button>
            </form> 
        </div>
    </div>
    </section>
</body>
</html>