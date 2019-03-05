Vue.component('list',{
    //li中class是动态的，需要给个val.checked
    template:`
        <ul class="todo-list">
            <li 
            v-for="(val,key) in act"
            :class="{completed:val.checked}"           
            >
                <div class="view">
                    <input 
                    class="toggle" 
                    type="checkbox" 
                    v-model="val.checked"
                    >
                    <label>{{val.city}}</label>
                    <button class="destroy" @click="rm(val.id)"></button>
                </div>
            </li>
        </ul>
    `,
    props:['act'],
    methods:{
        rm(id){
            this.$emit('rmdata',id)
        }
    }
})
