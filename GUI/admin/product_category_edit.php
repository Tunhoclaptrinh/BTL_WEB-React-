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
    $product_category_name = $_POST['product_category_name'];
    $category_id = $_POST['category_id'];
    $update_product_category = $product_category ->update_product_category($product_category_name,$product_category_id, $category_id);
    // var_dump($_POST);
}

?>


        <div class="admin-content-right">
            <div class="admin-content-right-product-category-update">
                <h1>UPDATE CATEGORY</h1>
                <form action="" method="POST">
                    <select name="category_id" id="">
                        <option value="">-- Chọn Danh Mục --</option>
                        <?php
                            $show_category = $product_category->show_category();
                            if($show_category){
                                while ($result2 = $show_category->fetch_assoc()) {
                        ?>
                                <option <?php if($result1['category_name'] == $result2['category_name']){echo "SELECTED";} ?> value="<?php echo $result2['category_id'] ?>"><?php echo $result2['category_name'] ?></option>
                        <?php
                                }
                            }
                        ?>
                    </select>
                    <p><a>product_category_id:</a> <a><?php echo $result['product_category_id']?></a></p>
                    <input required name="product_category_name" type="text" placeholder="Nhập tên danh mục" value="<?php echo $result['product_category_name']?>">
                    <button type="submit">UPDATE</button>
                </form>
            </div>
        </div>
    </section>
</body>
</html>