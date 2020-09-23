function loadCity(){

    $.getJSON(localStorage.getItem('serverAdress')+'?function=getCity').done(function(data){

        if (data.length >= 0){

            $('#city').append('<option disabled selected value="" >Seçiniz</option>');

            for (var i = 0; i < data.length; i++){
                $('#city').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
            $('#0eduInfoTableNXTown').append('<option disabled selected value="" >Seçiniz</option>');

            for (var i = 0; i < data.length; i++){
                $('#0eduInfoTableNXTown').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
            $('#1eduInfoTableNXTown').append('<option disabled selected value="" >Seçiniz</option>');

            for (var i = 0; i < data.length; i++){
                $('#1eduInfoTableNXTown').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
        }
    });
}

function loadDistrict(){

    var city = $('#city :selected').val();

    $.getJSON(localStorage.getItem('serverAdress')+'?function=getDistrict&cityCode='+city).done(function(data){

        if (data.length >= 0){

            $('#district').empty();
            $('#semt').empty();
            $('#mah').empty();

            $('#district').append('<option disabled selected value="" >Seçiniz</option>');

            for (var i = 0; i < data.length; i++){
                $('#district').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
        }
    });
}

function addEduNewTable (){

    var newID = $('#eduInfoTable > .evoPanelInc > .eduInfoTableNX').length;

    console.log('Eklenen :'+newID);

    $('#eduInfoTable > .evoPanelInc').append('<br><div id="'+newID+'eduInfoTableNX" class="evoTable2 evoTable23 eduInfoTableNX">' +
        '<div class="evoTable2Row evoTable2Row3"> <div class="c0">Öğrenim Durumu</div><div class="c1"><select id="'+newID+'eduInfoTableNXStatus" class="evoOptionBox evoOptionBox3"><option value="ÖnLisans">Ön Lisans</option><option value="Lisans">Lisans</option><option value="Master">Master</option><option value="Doktora">Doktora</option></select></div></div>' +
        '<div class="evoTable2Row evoTable2Row3"> <div>Okul Adı</div><div><select id="'+newID+'eduInfoTableNXName" class="evoOptionBox evoOptionBox3"></select></div> </div>' +
        '<div class="evoTable2Row evoTable2Row3"> <div>Bölümü</div><div><input id="'+newID+'eduInfoTableNXBranch" class="evoTextBox evoTextBox3" value=""  type="text" required="required"></div> </div>' +

        '<div class="evoTable2Row evoTable2Row3"> <div>Mevzuniyet Tarihi</div><div><div class="evoInputGroup evoInputGroup3"><span><img src="lib/evoEngine/img/date.svg"></span><input id="'+newID+'eduInfoTableNXYear" value="" class="evoNumberBox evoNumberBox7" required="required" min="1900" max="9999" type="number"></div></div> </div>' +
        '<div class="evoTable2Row evoTable2Row3"> <div>Derecesi</div><div><div class="evoInputGroup evoInputGroup3"><span><img src="images/point.svg"></i></span><input id="'+newID+'eduInfoTableNXPoint" value="" class="evoNumberBox evoNumberBox7" required="required" min="0" max="999" type="number" step="any"></div></div> </div>' +

        '<div class="evoTable2Row evoTable2Row3"> <div><div onclick="remove2Table(\''+newID+'eduInfoTableNX\')" class="evoButtonImga evoButtonImg5a small"><div><label></label></div></div> </div> <div></div> </div>' +
        '</div></div>');

    $.getJSON(localStorage.getItem('serverAdress')+'?function=getUniversity').done(function(data){

        if (data.length >= 0){
            $('#'+newID+'eduInfoTableNXName').empty();
            $('#'+newID+'eduInfoTableNXName').append('<option disabled selected value="">Seçiniz</option>');
            for (var i = 0; i < data.length; i++){
                $('#'+newID+'eduInfoTableNXName').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
        }
    });
    alertify.success('Eklendi');
}

function loadDistrictMX(){

    var district = $('#district :selected').val();

    console.log(district);

    $.getJSON(localStorage.getItem('serverAdress')+'?function=getDistrictMX&districtCode='+district).done(function(data){

        if (data.length >= 0){
            $('#semt').empty();
            $('#mah').empty();

            $('#semt').append('<option disabled selected value="" >Seçiniz</option>');

            for (var i = 0; i < data.length; i++){
                $('#semt').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
        }
    });
}

function loadDistrictMX2(){

    var district    = $('#district :selected').val();
    var semt        = $('#semt :selected').val();

    console.log(city);

    $.getJSON(localStorage.getItem('serverAdress')+'?function=getDistrictMX2&districtCode='+district+'&semtCode='+semt).done(function(data){

        if (data.length >= 0){
            $('#mah').empty();

            $('#mah').append('<option disabled selected value="" >Seçiniz</option>');

            for (var i = 0; i < data.length; i++){
                $('#mah').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
        }
    });
}

function remove2Table(ID){
    $("#"+ID).empty();

    alertify.error('Silindi');
}

function addLangTable (){

    var newID = $('#langInfoTable > .evoPanelInc > .langInfoTableNX').length;

    $('#langInfoTable  > .evoPanelInc').append('<br><div id="'+newID+'langInfoTableNX" class="evoTable2 evoTable23 langInfoTableNX">' +
        '<div class="evoTable2Row evoTable2Row3"> <div>Dil</div><div><select id="'+newID+'langInfoTableNXLang" name="lang['+newID+'][lang]" class="evoOptionBox evoOptionBox3"></select></div></div>' +
        '<div class="evoTable2Row evoTable2Row3"> <div>Durum</div><div><select id="'+newID+'langInfoTableNXStatus" name="lang['+newID+'][status]" class="evoOptionBox evoOptionBox3"><option value="Zayıf">Zayıf</option><option value="Orta">Orta</option><option value="İyi">İyi</option></select></div></div>' +
        '<div class="evoTable2Row evoTable2Row3"> <div>Öğrendiğiniz Yer</div><div><input id="'+newID+'langInfoTableNXLocation" class="evoTextBox evoTextBox7" value="" name="lang['+newID+'][location]" type="text" required="required"></div></div>' +

        '<div class="evoTable2Row evoTable2Row3"> <div><div onclick="remove2Table(\''+newID+'langInfoTableNX\')" class="evoButtonImga evoButtonImg5a small"><div><label></label></div></div> </div><div></div></div>' +
        '</div>');
    alertify.success('Eklendi');

    $.getJSON(localStorage.getItem('serverAdress')+'?function=getLanguage').done(function(data){
        if (data.length >= 0){
            $('#'+newID+'langInfoTableNXLang').empty();
            for (var i = 0; i < data.length; i++){
                $('#'+newID+'langInfoTableNXLang').append('<option value="'+data[i][0]+'">'+data[i][1]+'</option>');
            }
        }
    });

}

function addCourseTable(){

    var newID = $('#courseInfoTable > .evoPanelInc > .courseInfoTableNX').length;

    $('#courseInfoTable > .evoPanelInc').append('<br><div id="'+newID+'courseInfoTableNX" class="evoTable2 evoTable23 courseInfoTableNX">' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Eğitimin Konusu</div><div><input id="'+newID+'courseInfoTableNXTopic" class="evoTextBox evoTextBox7" value="" name="course['+newID+'][topic]" type="text" required="required" pattern="{120}"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Eğitim Veren Kuruluş</div><div><input id="'+newID+'courseInfoTableNXInstitution" class="evoTextBox evoTextBox7" value="" name="course['+newID+'][institution]" type="text" required="required" pattern="{120}"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Tarih</div><div><input id="'+newID+'courseInfoTableNXDate" class="evoTextBox evoTextBox7" value="" name="course['+newID+'][date]" type="month" required="required"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Süre</div><div><input id="'+newID+'courseInfoTableNXPoint" class="evoTextBox evoTextBox7" value="" name="course['+newID+'][point]" type="text" required="required"></div></div>' +

        '<div class="evoTable2Row evoTable2Row3" > <div><div onclick="remove2Table(\''+newID+'courseInfoTableNX\')" class="evoButtonImga evoButtonImg5a small"><div><label></label></div></div> </div><div></div>' +
        '</div>');
    alertify.success('Eklendi');
}

function addJobExpTable(){
    var newID = $('#jobExpTable > .evoPanelInc > .jobExpTableNX').length;

    $('#jobExpTable > .evoPanelInc').append('<br><div id="'+newID+'jobExpTableNX" class="evoTable2 evoTable23 jobExpTableNX">' +

        '<div class="evoTable2Row evoTable2Row3" > <div>İş Yeri Adı</div><div><input id="'+newID+'jobExpTableNXName" class="evoTextBox evoTextBox7" value="" name="jobExp['+newID+'][name]" type="text" required="required"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Ünvanınız</div><div><input id="'+newID+'jobExpTableNXLoc" class="evoTextBox evoTextBox7" value="" name="jobExp['+newID+'][loc]" type="text" required="required"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Başlama Tarihi</div><div><input id="'+newID+'jobExpTableNXDateStart" class="evoTextBox evoTextBox7" value="" name="jobExp['+newID+'][dateStart]" type="month" required="required"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Bitiş Tarihi</div><div><input id="'+newID+'jobExpTableNXDateEnd" class="evoTextBox evoTextBox7" value="" name="jobExp['+newID+'][dateEnd]" type="month" required="required"></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Ayrılma Nedeni</div><div><input id="'+newID+'jobExpTableNXReason" class="evoTextBox evoTextBox7" value="" name="jobExp['+newID+'][reason]" type="text" required="required"></div></div>' +

        '<div class="evoTable2Row evoTable2Row3" > <div><div onclick="remove2Table(\''+newID+'jobExpTableNX\')" class="evoButtonImga evoButtonImg5a small"><div><label></label></div></div> </div><div></div>' +
        '</div>');
    alertify.success('Eklendi');
}

function addReferenceTable(){
    var newID = $('#referenceTable > .evoPanelInc > .referenceTableNX').length;

    $('#referenceTable > .evoPanelInc').append('<br><div id="'+newID+'referenceTableNX" class="evoTable2 evoTable23 referenceTableNX">' +

        '<div class="evoTable2Row evoTable2Row3" > <div>Ad Soyad</div><div><input id="'+newID+'referenceTableNXName" class="evoTextBox evoTextBox7" value="" type="text" required="required" pattern="{140}" name="reference['+newID+'][name]" ></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Kurum / Görev</div><div><input id="'+newID+'referenceTableNXLoc" class="evoTextBox evoTextBox7" value="" type="text" required="required" pattern="{140}" name="reference['+newID+'][loc]" ></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Telefon</div><div><input id="'+newID+'referenceTableNXTel" class="evoTextBox evoTextBox7" value="" type="number" required="required" pattern="{140}" name="reference['+newID+'][tel]" ></div></div>' +

        '<div class="evoTable2Row evoTable2Row3" > <div><div onclick="remove2Table(\''+newID+'referenceTableNX\')" class="evoButtonImga evoButtonImg5a small"><div><label></label></div></div> </div><div></div>' +
        '</div>');
    alertify.success('Eklendi');
}

function addTechInfoTable(){
    var newID = $('#techInfoTable >.evoPanelInc > .techInfoTableNX').length;

    $('#techInfoTable > .evoPanelInc').append('<br><div id="'+newID+'techInfoTableNX" class="evoTable2 evoTable23 techInfoTableNX">' +

        '<div class="evoTable2Row evoTable2Row3" > <div>Katıldığınız</div><div><select id="'+newID+'techInfoTableNXJoin" name="techInfo['+newID+'][join]"  class="evoOptionBox evoOptionBox3"><option value="Bilgisayar">Bilgisayar</option><option value="Çizim Programları">Çizim Programları</option><option value="Kullanılabilen İş Makinaları">Kullanılabilen İş Makinaları</option><option value="Kullanılabilen İş Tezgahlar">Kullanılabilen İş Tezgahlar</option><option value="Diğer">Diğer (Belirtiniz)</option></select></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Adı</div><div><input id="'+newID+'techInfoTableNXName"  class="evoTextBox evoTextBox7" value="" type="text" required="required" pattern="{140}" name="techInfo['+newID+'][name]" ></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Süre</div><div><input id="'+newID+'techInfoTableNXTime"  class="evoTextBox evoTextBox7" value="" type="text" required="required" pattern="{140}" name="techInfo['+newID+'][time]" ></div></div>' +
        '<div class="evoTable2Row evoTable2Row3" > <div>Varsa Sertifika No / Tarihi</div><div><input id="'+newID+'techInfoTableNXNo" class="evoTextBox evoTextBox7" value="" type="text" required="required" pattern="{140}" name="techInfo['+newID+'][no]" ></div></div>' +

        '<div class="evoTable2Row evoTable2Row3" ><div><div onclick="remove2Table(\''+newID+'techInfoTableNX\')" class="evoButtonImga evoButtonImg5a small"><div><label></label></div></div> </div><div></div>' +
        '</div>');
    alertify.success('Eklendi');
}

function IMASoldier(){

    if($('#asker :selected').val() == "3"){
        $('#soldierTec').show();
    }else{
        $('#soldierTec').hide();
        $('#soldierTecBox').val('');
    }

}