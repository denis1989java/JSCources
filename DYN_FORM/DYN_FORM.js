var formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'},
    ];

var formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться:',kind:'submit'},
    ];

function dYN_FORM(tag,array) {
    let form=document.createElement(tag);
for (let i=0;i<array.length;i++) {
    let div=document.createElement('div');
    div.style.width='600px';
    let input = document.createElement("input");
    let select = false;
    let radio = false;
    let setSelectName='';
    let setRadioName='';
    for (let styles in array[i]) {
        switch (styles){
            case 'label':
                let label = document.createElement("label");
                label.style.width='150px';
                label.style.display='block';
                label.style.float='left';
                label.innerHTML=array[i][styles];
                div.appendChild(label);
                form.appendChild(div);
                break;
            case 'kind':
                switch (array[i][styles]){
                    case 'longtext':
                        input.setAttribute('type','text');
                        input.style.width='400px';
                        div.appendChild(input);
                        form.appendChild(div);
                        break;
                    case 'number':
                        input.setAttribute('type','text');
                        input.style.width='70px';
                        div.appendChild(input);
                        form.appendChild(div);
                        break;
                    case 'shorttext':
                        input.setAttribute('type','text');
                        input.style.width='170px';
                        div.appendChild(input);
                        form.appendChild(div);
                        break;
                    case 'combo':
                        select=true;
                        break;
                    case 'radio':
                        radio=true;
                        break;
                    case 'check':
                        input.setAttribute('type',"checkbox");
                        input.setAttribute('selected', true);
                        div.appendChild(input);
                        form.appendChild(div);
                        break;
                    case 'memo':
                       let textArea=document.createElement('textarea');
                        textArea.style.width='550px';
                        textArea.style.maxWidth='550px';
                        div.appendChild(textArea);
                        form.appendChild(div);
                        break;
                    case 'submit':
                        input.value=form.lastChild.firstChild.textContent.substr(0,(form.lastChild.firstChild.textContent.length-1));
                        input.setAttribute('type','submit');
                        div.removeChild(form.lastChild.firstChild);
                        div.appendChild(input);
                        form.appendChild(div);
                        break;
                }
                break;
            case 'name':
                console.log(select);
                if(select){
                    setSelectName=array[i][styles];
                }
                if(radio){
                    setRadioName=array[i][styles];
                }
                input.setAttribute('name',array[i][styles]);
                break;
            case 'variants':
                if(select){
                    let selectTag = document.createElement("select");
                    selectTag.setAttribute('name',setSelectName);
                    selectTag.style.width='174px';
                    div.appendChild(selectTag);
                    form.appendChild(div);
                    for(let f=0;f<array[i][styles].length;f++){
                        let option=document.createElement('option');
                            for (let optStyle in array[i][styles][f]){
                                switch (optStyle){
                                    case 'text':
                                        option.innerHTML=array[i][styles][f][optStyle];
                                        break;
                                    case 'value':
                                        option.setAttribute('value',array[i][styles][f][optStyle]);
                                        break;
                                    default:
                                        console.log('такого свойства не существует');
                                        break;
                                }
                            }
                            selectTag.appendChild(option);
                            if(f===array[i][styles].length-1){
                                option.setAttribute('selected', true);
                            }

                    }
                }
                if(radio){
                    for(let f=0;f<array[i][styles].length;f++){
                        let radLabel=document.createElement('label');
                        let radioTag=document.createElement('input');
                        radioTag.setAttribute('name',setRadioName);
                        radioTag.setAttribute('type','radio');
                        for (let radStyles in array[i][styles][f]) {
                            switch (radStyles){
                                case 'text':
                                    radLabel.innerHTML=array[i][styles][f][radStyles];
                                    break;
                                case 'value':
                                    radioTag.setAttribute('value',array[i][styles][f][radStyles]);
                                    break;
                                default:
                                    console.log('такого свойства не существует');
                                    break;
                            }
                        }
                        div.appendChild(radioTag);
                        form.appendChild(div);
                        div.appendChild(radLabel);
                        form.appendChild(div);
                    }
                }
                break;
            default:
                console.log(styles);
                console.log('такого свойства не существует');
                break;
        }
    }
}
    document.getElementsByTagName('body')[0].appendChild(form);
}
dYN_FORM('form',formDef1);
dYN_FORM('form',formDef2);
