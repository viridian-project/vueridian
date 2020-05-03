<?php
$useremail = $argv[1];
$hash = md5( strtolower( trim( $useremail ) ) );
echo "https://www.gravatar.com/avatar/".$hash."?s=48&d=identicon&r=PG&f=1"."\n";
?>
