<template>
     <div class="w3-padding">
         <!-- <el-link type="primary" @click=""><i class="el-icon-edit w3-margin-right"></i>edit field list</el-link> -->
         <el-input placeholder="Наименование" class="w3-margin" v-model="tovar.tovar_name"></el-input>
         <el-input placeholder="menu_id" class="w3-margin" v-model="tovar.tovar_menu_id"></el-input>
         <el-input placeholder="Название краски" class="w3-margin" v-model="tovar.tovar_name_kraski"></el-input>
         <el-input placeholder="Код краски" class="w3-margin" v-model="tovar.tovar_kod_kraski"></el-input>
         <el-input placeholder="Количество" class="w3-margin" v-model="tovar.tovar_col"></el-input>
         <el-input placeholder="Брендт" class="w3-margin" v-model="tovar.tovar_brend"></el-input>
         <el-input placeholder="Цена" class="w3-margin" v-model="tovar.tovar_price"></el-input>
         <el-button class="w3-margin" plain type="warning" @click="add">Добавить</el-button>
         <el-button class="w3-margin" plain type="success" @click="clear">Очистить</el-button>
     </div>
</template>
<script>
import {store} from '../store';
export default {
    props:["tovar"]
    ,
    data() {
        return {

        }
    },
    methods:{
        add(){
          if ((this.tovar.tovar_kod_kraski!='')&&(this.tovar.tovar_name_kraski)&&(this.tovar.tovar_name)
          &&(this.tovar.tovar_col)&&(this.tovar.tovar_brend)&&(this.tovar.tovar_price)){
            store.dispatch("addTovarKraski", this.tovar)
          }  
          else {
              this.$notify({
          title: 'Warning',
          message: 'Пустое поле!!!',
          type: 'warning'
        });
          }
        }
        ,clear(){
          this.tovar.tovar_name=''
          this.tovar.tovar_name_kraski=''
          this.tovar.tovar_kod_kraski=''
          this.tovar.tovar_price=''
          this.tovar.tovar_col=''
          this.tovar.tovar_brend=''
        }
    }
}
</script>
