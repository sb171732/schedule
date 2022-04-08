<template>
  <div id="app">
      <div class="w3-top">
      <div class="w3-bar w3-indigo" style="letter-spacing:4px;">
        <h3 class="w3-bar-item">Товары</h3>
      </div>
      </div>
      <div class="w3-padding " style="margin-top: 80px;">
     <el-col :span="8">
         <el-cascader style="width:100%"
            placeholder="Фильтр по категориям"
            :options="options" v-model="filter_sel"
            filterable></el-cascader>
     </el-col>
     <el-col :span="8">
        <el-button @click="openModal" type="warning" plain>Add new tovar</el-button>
     </el-col>
     <el-col :span="8">
        <el-button @click="openModal2" type="info" plain>Fields</el-button>
     </el-col>
     <el-col :span="8"></el-col>
     
     
        
          <el-table
      :data="f_Tovar"
      style="width: 100%">
      <el-table-column
        prop="tovar_name"
        label="Наименование"
        width="280">
      </el-table-column>
      <el-table-column
        prop="tovar_col"
        label="Количество"
         width="120"
        >
      </el-table-column>
      <el-table-column
        prop="tovar_kod_kraski"
        label="Код краски"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tovar_brend"
        label="Бренд">
      </el-table-column>
      <el-table-column
        prop="tovar_name_kraski"
        label="Название краски ">
      </el-table-column>
      <el-table-column
        prop="tovar_price"
        label="Цена">
      </el-table-column>
      <el-table-column
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.row.id, f_Tovar)"
          type="text"
          size="small">
          Remove
        </el-button>
      </template>
    </el-table-column>
    </el-table>
      </div>



     <el-drawer
  title="Добавить товар"
  :visible.sync="drawer"
  size="50%"
  :with-header="false">
  <div class="w3-padding">
      <h4>Добавить товар</h4>
      <el-select v-model="main_menu_id" placeholder="Выбрать категорию">
          <el-option v-for="m of Menu" :key="m.id" :label="m.name" :value="m.id"></el-option>
      </el-select> <br >
      <el-select class="w3-margin" v-model="tovar.tovar_menu_id" placeholder="Выбрать подкатегорию">
          <el-option v-for="m of MenuSecond" :key="m.id" :label="m.name" :value="m.id"></el-option>
      </el-select>
      <add-kraski :tovar="tovar">
      </add-kraski>
        
  </div>
</el-drawer> 
<el-drawer
  title="Добавить характеристики товара"
  :visible.sync="drawer2"
  size="50%"
  :with-header="false">
  <div class="w3-padding">
      <h4>Характеристики товара</h4>
      <fieldslist></fieldslist>        
  </div>
</el-drawer> 
  </div>
</template>

<script>
import AddKraski from './components/AddKraski.vue';
import fieldslist from './components/FieldsList.vue';
import {store} from './store';
// import AddKraski from './components/AddKraski.vue';

export default {
  name: 'app',
  data(){
    return {
      tovar:{
        tovar_menu_id:'',
        tovar_name:'',
        tovar_brend:'',
        tovar_name_kraski:'',
        tovar_price:'',
        tovar_kod_kraski:'',
        tovar_col:'',
      },
      drawer:false,
      drawer2:true,
      main_menu_id:'',
      filter_sel:'',
      options: [{
          value: 'rP22mCVabKldDw5pqNN8',
          label: 'Автоэмали и краски',
          children: [
            {
            value: '1CGV2d4lcgSQJBPIEjGN',
            label: 'Акриловые',
            },
            {
            value: 'X66Umvw374W1Q6rWb7P3',
            label: 'Алкидные',
            },
            {
            value: 'wOwlKZ83bo8XUUiuT5Bj',
            label: 'Металлик',
            }
          ]
      },
      {
        value:"QgzEIoXY27R5tOp2rSdb",
        label:'Лаки',
        children:[
          {
            value: 'uxmD6iUYyOzu7q1SwsNl',
            label: '2К акриловые'
          },
          {
            value: 'ai80KVO6PfA9b4LEvhBF',
            label: 'Аэрозольные'
          },
          {
            value: 'XoDyuhI51u74sVrvH0cA',
            label: 'Изолятор'
          },
          {
            value: 'ujpmsLquBhxz9duvE19E',
            label: 'Эпоксидные'
          },
          {
            value: 'H5Zc5YJ8i5cJqtLMjGcu',
            label: 'По пластмассе'
          },
          
        ]  
      }

      
      
      
      ]     
    }
  },
  components:{
    AddKraski,fieldslist
  }
  ,
  computed:{
    
    Tovar(){ return store.state.tovar;},
    Menu(){ return store.state.menu;},
    MenuSecond(){ return store.state.menuSecond.filter((n)=>{ return n.mainM_id.match(this.main_menu_id) });
    },
     f_Tovar(){
       return this.Tovar.filter((n)=>{ return n.tovar_menu_id === this.filter_sel[1] })
     }    

  },
  methods:{
      openModal(){
        this.drawer = true 
     },
      openModal2(){ this.drawer2 = true },
     deleteRow(index, td){
       console.log(index+','+td)
       store.dispatch("deleteFromTovar",index)    
     }
  }
  ,
  created(){
     store.dispatch("bindTovar");
     store.dispatch("bindMenu");
     store.dispatch("bindMenuSec");
  },
  watch:{
    filter_sel(to){
       console.log(to[1].toString())

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
