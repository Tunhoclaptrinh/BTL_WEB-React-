<?php
include "header.php";
include "slider.php";
include "class/product_category_class.php";

?>

<?php
$product_category = new product_category;
$show_product_category = $product_category -> show_product_category();

?>

        <div class="admin-content-right">
            <div class="admin-content-right-category-list">
                <h1>Danh sách danh mục</h1>
                <table>
                    <tr>
                        <th>STT</th>
                        <th>CATEGORY_NAME</th>
                        <th>PRODUCT_CATEGORY_ID</th>
                        <th>PRODUCT_CATEGORY_NAME</th>
                        <th>ACTION</th>
                    </tr>
                    
                    <?php
                    if($show_product_category){
                        $i=0;
                        while ($result = $show_product_category->fetch_assoc()) {
                            $i++;
                    ?>
                    <tr>
                        <td><?php echo $i ?></td>
                        <!-- <td><?php echo $result['category_id'] ?></td> -->
                        <td><?php echo $result['category_name'] ?></td>
                        <td><?php echo $result['product_category_id'] ?></td>
                        <td><?php echo $result['product_category_name'] ?></td>
                        <td><a href="product_category_edit.php?product_category_id=<?php echo $result['product_category_id'] ?>"><button>UPDATE</button></a>|<a href="product_category_delete.php?product_category_id=<?php echo $result['product_category_id'] ?>"><button>DELETE</button></a></td>
                    </tr>
                    <?php
                        }
                    }
                    ?>
                </table>
            </div>
        </div>
    </section>
</body>
</html>