<?php
include "FE_class/FE_header_class.php";

?>

<?php
$category = new category;
$show_category = $category -> show_category();

$product_category = $category;
$show_product_category = $product_category -> show_product_category();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.0/css/all.css">
    <script defer src="https://use.fontawesome.com/releases/v5.15.0/js/all.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<body>
    <header>
        <div class="logo">
            <img src="/GUI/image/logotun (2).png" alt="">
        </div>
        <div class="hamburger" onclick="toggleMenu()">
            <i class="fas fa-bars"></i>
        </div>
        <div class="menu">
        <?php
        if ($show_category) {
            while ($result = $show_category->fetch_assoc()) {
        ?>
                <li>
                    <a href="#"><?php echo $result['category_name']; ?></a>
                    <ul class="sub-menu">
                        <li><a href="#">Type</a>
                            <ul>
                                <?php
                                if ($show_product_category) {
                                    // Reset pointer of $show_product_category to the beginning
                                    $show_product_category->data_seek(0);

                                    while ($product_result = $show_product_category->fetch_assoc()) {
                                        // Kiểm tra nếu sản phẩm thuộc về danh mục hiện tại
                                        if ($product_result['category_id'] == $result['category_id']) {
                                ?>
                                            <li>
                                                <a href="#"><?php echo $product_result['product_category_name']; ?></a>
                                            </li>
                                <?php
                                        }
                                    }
                                }
                                ?>
                            </ul>
                        </li>
                        <li><a href="#">All</a></li>
                    </ul>
                </li>
        <?php
            }
        }
        ?>

        </div>
        <div class="others">
            <li><input type="text" placeholder="Search"><i class="fas fa-search"></i></li>
            <li><a class="fa fa-paw" href=""></a></li>
            <li><a class="fa fa-user" href=""></a></li>
            <li><a class="fa fa-shopping-bag" href=""></a></li>
        </div>
    </header>