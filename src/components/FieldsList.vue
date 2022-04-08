<template>
    <div>
         <div class="w3-padding">
         <!-- <el-link type="primary" @click=""><i class="el-icon-edit w3-margin-right"></i>edit field list</el-link> -->
         <el-input placeholder="Наименование характиристики товара" class="w3-margin" v-model="f.caption"></el-input>
         <el-input placeholder="Метка по англ, напр: name" class="w3-margin" v-model="f.name"></el-input>
         
         <el-button class="w3-margin" plain type="warning" @click="add">Добавить</el-button>
         <el-button class="w3-margin" plain type="success" @click="clear">Очистить</el-button>
     </div>
    </div>
</template>
<script>
import {store} from '../store';
export default {
    props:["tovar"]
    ,
    data() {
        return {
          f:{
              caption:'',
              name:''
          }
        }
    },
    methods:{
        add(){
          if ((this.f.caption!='')&&(this.f.name))
         {
            store.dispatch("addField", this.f)
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
