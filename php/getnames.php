<?php
  $fs = $_GET["fs"];
  $dirs = json_encode(array_filter(glob('../*' . $fs . '*'), 'is_dir'));
  echo $dirs;
?>