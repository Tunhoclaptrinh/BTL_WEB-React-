<?php
include "header.php";
include "slider.php";
include "class/product_category_class.php";

?>

<?php
$product_category = new product_category;
if($_SERVER["REQUEST_METHOD"] === 'POST'){
    $category_id = $_POST['category_id'];
    $product_category_name = $_POST['product_category_name'];
    $insert_product_category = $product_category ->insert_product_category($category_id, $product_category_name);
    // var_dump($_POST);
}

?>
        <div class="admin-content-right">
            <div class="admin-content-right-product-category-add">
                <h1>Thêm loại sản phẩm</h1>
                <form action="" method="POST">
                    <select name="category_id" id="">
                        <option value="">-- Chọn Danh Mục --</option>
                        
                        <?php
                            $show_category = $product_category->show_category();
                            if($show_category){
                                while ($result = $show_category->fetch_assoc()) {
                        ?>
                                <option value="<?php echo $result['category_id'] ?>"><?php echo $result['category_name'] ?></option>
                        <?php
                                }
                            }
                        ?>

                    </select> <br>
                    <input required name="product_category_name" type="text" placeholder="Nhập tên loại sản phẩm">
                    <button type="submit">THÊM</button>
                </form>
            </div>
        </div>
    </section>
</body>
</html>