function pagecounter(a, b) {
    if(a != null) {
        if(b == "previous") {
            return "Page" + String(a - 1);
        } else if(b == "next") {
            return "Page" + String(a + 1);
        } else {
            return "";
        }
    } else {
        return "";
    }
}

setup.previouspage = function() {
    const passages = State.passages;
    const current_passage = passages[passages.length - 1];
    if(passages.length < 2 || current_passage.substr(0,4) != "Page") {
        return "";
    } else {
        const current_passage_int = parseInt(current_passage.substr(4, passages.length - 1));
        const previous_passage_int = current_passage_int - 1;
        return pagecounter(current_passage_int,"previous");
    }
};

setup.nextpage = function() {
    const passages = State.passages;
    const current_passage = passages[passages.length - 1];
    if(passages.length < 2 || current_passage.substr(0,4) != "Page") {
        return "";
    } else {
        const current_passage_int = parseInt(current_passage.substr(4, passages.length - 1));
        const next_passage_int = current_passage_int + 1;
        return pagecounter(current_passage_int,"next");
    }
};