//封装滚动加载
const loadMore = {
    data(){
        return{
            status: 'loadmore',
            isFinish:false,
        }
    },
    onReachBottom(){
        if (this.isFinish) return
        this.page++;
        this.status = 'loading'
        this.initData();
    },
    methods:{
        judgeFinish(totalPage){
            this.isFinish = this.page>=totalPage;
            this.status = this.isFinish?'nomore':'loadmore'
        },
        initData(){
        }
    }
}
export default loadMore;