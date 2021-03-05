<?
	$content = file_get_contents("php://input");
	$decoded = json_decode($content, true);

	// $inv_id       = $decoded[inv_id];
	$inv_desc     = $decoded[inv_desc];
	$out_summ     = $decoded[out_summ]; 
	$shp_name     = $decoded[shp_name];
	$shp_sec_name = $decoded[shp_sec_name];

	$inv_id       = 0;
	$mrh_login    = "it-school.pnz";
	$mrh_pass1    = "SUJxv7V3D0BEkGTfg11M";

	$crc = md5("$mrh_login:$out_summ:$inv_id:$mrh_pass1:Shp_name=$shp_name:Shp_sec_name=$shp_sec_name");

	echo 
		"https://auth.robokassa.ru/Merchant/Index.aspx?".
			"MerchantLogin=$mrh_login&".
			"OutSum=$out_summ&".
			"InvoiceID=$inv_id&".
			"Description=$inv_desc&".
			"SignatureValue=$crc&".
			"Shp_name=$shp_name&".
			"Shp_sec_name=$shp_sec_name&".
			"Encoding=utf-8&".
			"Culture=ru&amp";
?>
