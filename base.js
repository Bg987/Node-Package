module.exports.x = function (number) {
    let str = new Array(9).fill(null);
    if (number > 999999999) {
        str[0]=  "error! number must be less than 999999999";
    }
    else if (number == 0) {
        str[0] ="zero";
    }
    else {
        //123456789
        b = Math.trunc(((((number % 10000000) % 100000) % 1000) % 100) % 10);// b = 9
        a = Math.trunc(((((number % 10000000) % 100000) % 1000) % 100) / 10); //a = 8
        c = Math.trunc((((number % 10000000) % 100000) % 1000) / 100); //c = 7
        d = Math.trunc(((number % 10000000) % 100000) / 1000); // d =56
        i = Math.trunc((number % 10000000) / 100000);//i = 34
        h = Math.trunc(number / 10000000); //h = 12
        x = Math.trunc(d / 10);// x = 5
        y = Math.trunc(d % 10);// y = 6
        j = Math.trunc(h / 10);// j = 1
        k = Math.trunc(h % 10);// k = 2
        m = Math.trunc(i / 10);// m = 3
        n = Math.trunc(i % 10);// n = 4
        str[8] = word1(j, k);
        if (j != 0 || k != 0) {
            str[7]=  "Crore";
        }
        str[6]= word1(m, n);
        if (m != 0 || n != 0) {
            str[5] = "Lakh";
        }
        str[4]=word1(x, y);
        if (x != 0 || y != 0) {
            str[3] = "Thousand";
        }
        str[2]= word(c);
        if (c != 0) {
            str[1]= "Hundred";
        }
        str[0] = word1(a, b);
    }
    function word(j) {
        let str= "";
        switch (j) {
            case 1:
                str += "One";
                break;
            case 2:
                str += "Two"
                break;
            case 3:
                str += "Three";
                break;
            case 4:
                str += "Four";
                break;
            case 5:
                str += "Five";
                break;
            case 6:
                str += "Six";
                break;
            case 7:
                str += "Seven";
                break;
            case 8:
                str += "Eight";
                break;
            case 9:
                str += "Nine";
                break;
        }
        return str;
    }
    function word1(i, j) {
        let str= "";
        switch (i) {
            case 0:
                str = word(j);
                break;
            case 1:
                switch (j) {
                    case 0:
                        str += "Ten";
                        break;
                    case 1:
                        str += "Eleven";
                        break;
                    case 2:
                        str += "Twelve";
                        break;
                    case 3:
                        str += "Thirteen";
                        break;
                    case 4:
                        str += "Fourteen";
                        break;
                    case 5:
                        str += "Fifteen";
                        break;
                    case 6:
                        str += "Sixteen";
                        break;
                    case 7:
                        str += "Seventeen";;
                        break;
                    case 8:
                        str += "Eighteen";
                        break;
                    case 9:
                        str += "Nineteen";
                        break;
                }
                break;
            case 2:
                str += "Twenty "+word(j);
                break;
            case 3:
                str += "Thirty "+word(j);
                break;
            case 4:
                str += "Forty "+word(j);
                break;
            case 5:
                str += "Fifty "+word(j);
                break;
            case 6:
                str += "Sixty "+word(j);
                break;
            case 7:
                str += "Seventy "+word(j);
                break;
            case 8:
                str += "Eighty "+word(j);
                break;
            case 9:
                str += "Ninety "+word(j);;
                break;
        }
        return str;
    }
    return str;
};
