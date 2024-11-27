<?php
include "header.php";
include "slider.php";
include "class/product_class.php";

?>

<?php
$product = new product;
if($_SERVER["REQUEST_METHOD"] === 'POST'){
    // $category_id = $_POST['category_id'];
    // $product_category_name = $_POST['product_category_name'];
    $insert_product = $product ->insert_product($_POST, $_FILES);

    // var_dump($_POST,$_FILES);
    
    // echo '<pre>';
    // echo print_r($_FILES);
    // echo '<pre>';
}

?>
<style></style>

        <div class="admin-content-right">
            <div class="admin-content-right-product-add">
                <h1>Thêm Sản Phẩm</h1>
                <form action="" method="POST" enctype="multipart/form-data">
                    <table>
                        <tr>
                            <td>
                                <label for="">Nhập tên sản phẩm <span style="color: red;">*</span></label>
                                <input name="product_name" required type="text" placeholder="Nhập tên sản phẩm">
                            </td>
                            <td>
                                <label for="">Chọn danh mục<span style="color: red;">*</span></label>
                                <select name="category_id" id="category_id">
                                    <option value="#">-- Chọn Danh mục --</option>
                                    <?php
                                        $show_category = $product->show_category();
                                        if($show_category){
                                            while ($result = $show_category->fetch_assoc()) {
                                    ?>
                                    <option value="<?php echo $result['category_id'] ?>"><?php echo $result['category_name'] ?></option>
                                        <?php
                                            }
                                        }
                                    ?>
                                </select>
                            </td>
                            <td>
                            <label for="">Chọn loại sản phẩm <span style="color: red;">*</span></label>
                                <select name="product_category_id" id="product_category_id">
                                <option value="#">-- Chọn loại sản phẩm --</option>
                                <?php
                                    $show_product_category = $product->show_product_category();
                                    if($show_product_category){
                                        while ($result = $show_product_category->fetch_assoc()) {
                                ?>
                                <option value="<?php echo $result['product_category_id'] ?>"><?php echo $result['product_category_name'] ?></option>
                                    <?php
                                        }
                                    }
                                ?>
                                
                            </select>
                            </td>
                            <td>
                                <label for="">Giá sản phẩm <span style="color: red;">*</span></label>
                                <input name="product_price" required type="text" placeholder="Giá sản phẩm">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="">Giá khuyến mãi<span style="color: red;">*</span></label>
                                <input name="product_price_discount" required type="text" placeholder="Giá khuyến mãi">
                            </td>
                            <td colspan='3' rowspan='3'>
                                <label for="">Mô tả sản phẩm <span style="color: red;">*</span></label>
                                <textarea name="product_description" id="editor1" required placeholder="Mô tả sản phẩm"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="">Ảnh sản phẩm <span style="color: red;">*</span></label>
                                <span style="color: red;"><?php if(isset($insert_product)){
                                    echo $insert_product;
                                };?></span>
                                <input name="product_img" style=' padding:7px; height:40px;' required multiple type="file">
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <label for="">Ảnh mô tả sản phẩm  <span style="color: red;">*</span></label>
                                <input name="product_description_img[]" style=' padding:7px; height:40px;' required multiple type="file">
                            </td>
                        </tr>
                    </table>
                    
                    
                    
                    
                    
                    
                    <button  type="submit">ADD</button>
                </form>
            </div>
        </div>
    </section>
</body>
<script>
    // Replace the <textearea id="editor1"> with a CKEditor 4
    // instance, using default configuration.
    // CKEDITOR.replace('editor1');
    CKEDITOR.replace( 'editor1', {
    filebrowserBrowseUrl: 'ckfinder/ckfinder.html',
    filebrowserUploadUrl: 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserWindowWidth: '1000',
    filebrowserWindowHeight: '700'
} );

</script>

<script>
    $(document).ready(function(){
        $('#category_id').change(function(){
            // alert($(this).val());
            var x = $(this).val();
            $.get("product_add_ajax.php",{category_id:x},function(data){
                $("#product_category_id").html(data);
            })
        });
    });
</script>

</html>