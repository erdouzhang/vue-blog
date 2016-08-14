import mark from '../js/marked.min.js';

export function ellipsis(str, length) {
    if(str && length) {
        if (str.length > length) {
            str = str.substr(0, length) + "...";
        }
        return str
    }
}

export function filterItem(data, key) {
    if(data && key) {
        if(data[".key"] != key){
           return data;
        }
    }
}

export function articleDate(date) {
    var date = new Date(date);
    var year = date.getFullYear();
    var month = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var str = year + "-" + month + "-" + day;
    return str;
}


export function marked(data) {
    if(data){
        var htmlStr = mark(data);
        return htmlStr;
    }
}