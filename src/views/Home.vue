<template>
  <div class="home">
       <table class="w3-table w3-bordered" style="">
            <tr>
                <th rowspan="4" class="wd" style="text-align:center;vertical-align:inherit;">
                    Понедельник
                </th>
                <th>№</th>
                <th>10A - <i style="color: blue;">203</i></th>
                <th>13A - <i style="color: blue;">300</i></th>
                <th>20В - <i style="color: blue;">205</i></th>
                <th>19 - <i style="color: blue;">301</i></th>
                <th>20Б - <i style="color: blue;">306</i></th>
                <th>20.3 - <i style="color: blue;">200</i></th>
                <th>20.4 - <i style="color: blue;">200.1</i></th>
                <th>11 - <i style="color: blue;">206</i></th>
                <th>23A - <i style="color: blue;">305</i></th>
                <th>14 - <i style="color: blue;">303</i></th>
                <th>19.4 - <i style="color: blue;">304</i></th>
               
            </tr>
            <tr>
                <td>1</td>
                <td>
                  <div class="">
                    {{ getSubjects(getPara('1','brwcAFUyFeTBq87LIGjQ','7JDSEKmqdRAYf34qb9oJ')[0].subjectId)[0].caption }}
                    </div>
                  <div class=""><i style="color: gray;">(Салчак)</i></div>
                 </td> 
                <td>Консультация</td>
                <td>МДК 03.01
                   <div class=""><i style="color: gray;">(Хертек)</i></div>
                </td>
                <td>МДК 01.01
                   <div class=""><i style="color: gray;">(Докан-оол)</i></div>
                </td>
                <td>О проект
                   <div class=""><i style="color: gray;">(Хомушку)</i></div>
                </td>
                <td>БЖ
                   <div class=""><i style="color: gray;">(Чимит)</i></div>
                </td>
                <td>МДК 02.02
                   <div class=""><i style="color: gray;">(Ооржак К-Б.В)</i></div>
                </td>
                <td>
                   <div class=""><i style="color: gray;"></i></div>
                </td>
                <td>
                   <div class=""><i style="color: gray;"></i></div>
                </td>
                <td>МДК 03.01
                   <div class=""><i style="color: gray;">(Хертек)</i></div>
                </td>
                <td>Пакеты ПП
                   <div class=""><i style="color: gray;">(Дамдын)</i></div>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ин. яз
                  <div class=""><i style="color: gray;">(Шактыр-оол)</i></div>
                  </td> 
                <td>Рус. яз</td> 
                <td>МДК 01.01</td>
            </tr>
            <tr>
               <td>3</td>
               <td>ОБЖ
                 <div class=""><i style="color: gray;">(Чимит)</i></div>
                 </td> 

               <td></td> 
               <td>МДК 01.01</td> 
            </tr>       
       </table>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'
export default {
  name: 'Home',
  data(){
    return {
      group:[]
    }
  },
  computed:{
     Group(){
       return store.state.group
     },
     Para(){return store.state.para},
     Subjects(){return store.state.subjects},
  },
  methods:{
   getPara(num,groupId,weekId){
     return this.Para.filter((n)=>{ return (n.num.match(num))&&(n.groupId.match(groupId))&&(n.weekId.match(weekId)) })   
   },
   getSubjects(id){
     return this.Subjects.filter((n)=>{ return n.id.match(id) })   
   } 
  },
  created(){
     store.dispatch("bindGroup");
     store.dispatch("bindPara");
     store.dispatch("bindSubjects");
}
}
</script>
<style>
    .wd{
      width: 50px;
      
      transform:rotate(270deg)
    }
</style>