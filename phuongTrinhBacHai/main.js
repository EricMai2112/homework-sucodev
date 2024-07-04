var tinh = document.getElementById('btnTinh');

tinh.onclick = function(){
    let valueA = document.getElementById('a').value;
    let valueB = document.getElementById('b').value;
    let valueC = document.getElementById('c').value;
    let valuePT = document.getElementById('phuongTrinh');
    let valueKQ = document.getElementById('kq');

    valuePT.value = `${valueA}x^2 + ${valueB}x + ${valueC} = 0`

    let delta = valueB*valueB - 4 * valueA * valueC;
    let x1, x2 = 0;

    if(delta < 0){
        valueKQ.value = 'Phương trình vô nghiệm';
    }else if(delta ==0){
        x1 = -valueB/2*valueA;
        valueKQ.value = `x1 = x2 = ${x1}`;
    }else{
        let x1 = (-valueB+Math.sqrt(delta))/(2*valueA);
        let x2 = (-valueB-Math.sqrt(delta))/(2*valueA);

        valueKQ.value = `x1 = ${x1}, x2 = ${x2}`;
    }
}