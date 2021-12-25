const content=document.getElementById('content')
const data=document.getElementById('date')
const time=document.getElementById('time')
const addBth=document.getElementById('addBth')
const deletedBth=document.getElementById('deletedBth')
const list=document.getElementById('list')

const listContent=[]

class renderFeature{
    render(){
        let htmlStr=''


        listContent.forEach(function (item) {
            htmlStr=htmlStr+`
        <div class="m-padded-tp-big m-padded-lr-responsive" id="item">
        <div><span>类容:${item.content}</span></div>
        <div class="m-padded-tp-big"><span>时间:${item.date} ${item.time}</span></div>
    </div>
        `
        })
        list.innerHTML=htmlStr
    }
    clear(){
        document.getElementById('content').value="";
        document.getElementById('date').value="";
        document.getElementById('time').value="";
    }
}

    const r1=new renderFeature()
addBth.addEventListener('click',function () {

    listContent.unshift({
            content:content.value,
            date:data.value,
            time:time.value
        })
    r1.render()
    r1.clear()


})

deletedBth.addEventListener('click',function (){
    listContent.shift()
    r1.render()
})
