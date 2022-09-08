import axios from 'axios';

export default{
    methods: {
        async $api(url, data){
            return(await axios({ //클라이언트 서버 호출
                method: 'post',
                url,
                data
            }).catch(e=>{
                console.log(e);
            })).data;
        }
    }
}