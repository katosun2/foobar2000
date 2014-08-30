//===================================================
//=========Kugou Lyric Source For ESLyric===========
//===================================================

var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP.3.0");
var xmlDoc = new ActiveXObject("MSXML.DOMDocument");

function get_my_name() {
	return "酷狗音乐";
}

function get_version() {
	return "0.0.1";
}

function get_author() {
    return "ohyeahyeahyeah";
}

function start_search(info, callback) {
	var url = "http://mobilecdn.kugou.com/new/app/i/krc.php";
	var metadata = {
		cmd : 200,
		type:0,
		timelength: "277000",
		keyword : ""
	};

	fb.trace("QQ音乐搜索到的歌词数量： ");
	
	return;
	//add your code here
	var title = info.Title;
	//.......
	var new_lyric = fb.CreateLyric();

	new_lyric.Title = title; // matched title
	new_lyric.Source = get_my_name();
	new_lyric.Artist = info.Artist;

	//..... //not all are necessary.
	new_lyric.LyricText = "[00:00.74]SJ Cause I can't stop\n[00:06.00]SJ Cause I can't stop";
	callback.AddLyric(new_lyric);// add it to eslyric.
}

