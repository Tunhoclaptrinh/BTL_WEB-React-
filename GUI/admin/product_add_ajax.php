
<?php 
include "class/product_class.php";
$product = new product;


$category_id = $_GET['category_id'];

?>

<?php
    $show_product_category_ajax = $product->show_product_category_ajax($category_id);
    if($show_product_category_ajax){
        while ($result = $show_product_category_ajax->fetch_assoc()) {
?>
<option value="<?php echo $result['product_category_id'] ?>"><?php echo $result['product_category_name'] ?></option>
    <?php
        }
    }
?>