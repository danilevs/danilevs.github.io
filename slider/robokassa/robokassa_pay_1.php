<?
	$content = file_get_contents("php://input");
	$decoded = json_decode($content, true);

	$inv_id   = $decoded[inv_id];
	$inv_desc = $decoded[inv_desc];
	$out_summ = $decoded[out_summ]; 
	$shp_name = $decoded[shp_name];
	$shp_sec_name = $decoded[shp_sec_name];

	$mrh_login = "it-school.pnz";
	$mrh_pass1 = "SUJxv7V3D0BEkGTfg11M";
	$IsTest = 1;

	$crc = md5("$mrh_login:$out_summ:$inv_id:$mrh_pass1:Shp_name=$shp_name:Shp_sec_name=$shp_sec_name");
	
	
	echo 
		"<a ".
			"href='https://auth.robokassa.ru/Merchant/Index.aspx?".
				"MerchantLogin=$mrh_login&amp;".
				"OutSum=$out_summ&amp;".
				"InvoiceID=$inv_id&amp;".
				"Description=$inv_desc&amp;".
      			"Shp_name=$shp_name&amp;".
     			"Shp_sec_name=$shp_sec_name&amp;".
				"SignatureValue=$crc&amp;".
				"Encoding=utf-8&amp;".
				"Culture=ru&amp;".
				// "IsTest=$IsTest".
				"' ".
			"target='_blank'".
			"class='btn-attractor'".
		">Купить прямо сейчас</a>";
	

	
?>
