// 1. Input từ đâu đó
const input1 = "hfdawhwhcoomdd";

const input2 = "ddddasdadjlqwjdasjdahdfzhxckahsfdhqaewhqowuieazjsdlkzmxcnmalwieasdwidjddddds";

const input3 = "awdwd";



// 2. Setup các trường hợp tạo ra tổ hợp đúng
const rules = {
    a: ["w", "a"], // ă=aw, â=aa
    d: ["d"], //đ=dd
    e: ["e"], //ê=ee,
    o: ["o", "w"], //ô=oo, ơ=ow
    w: [], // ư=w
};


// 3. Logic chính
function charCount(s, rules) {
    let result = [];
    let temp = null;
    let check = null;


    // 3.1 Function reset giá trị của stack
    function resetVar() {
        temp = null
        check = null
    }


    // 3.2 Lặp qua các giá trị của input
    for (let i = 0; i < s.length; i++) {
        const element = s[i];


        // 3.2.1 Cách tiếp cận bài toán đó là kiểm tra từng phần tử, nếu phần tử khớp với keys của "rules" đã setup thì đẩy vào stack check và temp
                    // Nếu stack check tồn tại thì lặp qua các giá trị của mảng check, tìm tổ hợp đúng
                    // If(tổ hợp tồn tại) {
                        // Đẩy kết quả vào result
                        // Reset lại stack
                    // }
                    // Else (tổ hợp sai) {
                            // If (current value có thể là bắt đầu của 1 tổ hợp thuộc rules) {
                                // Đặt check = current val
                            // }
                            // Else(current value không là bắt đầu của bất cứ tổ hợp nào) {
                                // Reset lại 2 biến stack
                                // Tiếp tục vòng lặp cho đến hết
                            // }
                    // }
        if (!check && Object.keys(rules).includes(element)) {
            temp = element;
            check = element;
        } else if (check) {
            temp = element;
            if (check === "w") {
                result.push(check);
                temp = element;
                check = null;
            } else if (rules[check].includes(element)) {
                result.push(check + temp);
                resetVar()
            } else {
                if (Object.keys(rules).includes(element)) {
                    check = element
                } else {
                    resetVar()
                }
            }
        }
    }

    return result;
}


console.log(charCount(input1, rules));
console.log(charCount(input2, rules));
console.log(charCount(input3, rules));