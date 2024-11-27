<?php
include "header.php";
include "slider.php";
include "class/category_class.php";
?>


<?php 
$category = new category;
if (!isset($_GET['category_id']) || $_GET['category_id'] == NULL){
    echo "<script>window.location = 'category_list.php';</script>";
    // Xử lý logic khi không có category_id: Nếu không có category_id, chuyển hướng về trang danh sách danh mục.
}
else {
    $category_id = $_GET['category_id'];
}
$get_category = $category -> get_category($category_id);
if ($get_category) {
    $result = $get_category -> fetch_assoc();
}
?>

<?php
$category = new category;
if($_SERVER["REQUEST_METHOD"] === 'POST'){
    $category_name = $_POST['category_name'];
    $insert_category = $category ->delete_category($category_id);
    // var_dump($_POST);
}

?>

<div class="admin-content-right">
        <div class="admin-content-right-category-delete">
            <h1>DELETE CATEGORY</h1>
            <form action="" method="POST">
                <p><a>category_id:</a> <a><?php echo $result['category_id']?></a></p>
                <p><a>category_name:</a> <a><?php echo $result['category_name']?></a></p>                
                <button type="submit">DELETE</button>
            </form> 
        </div>
    </div>
    </section>
</body>
</html>