import { useHistory } from "react-router-dom";

const Check = () => {
  const history = useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    history.push('/success');
  }

  return ( 
        <div className="Check">
            <h1>付款資訊</h1>
            <form onSubmit={handleSubmit}>
                <label>持卡人姓名</label>
                <input
                  type ="text"
      
                />
                <label>卡號</label>
                <input
                  type ="text"
                  
                />
                <label>檢查碼</label>
                <input
                  type ="text"
                  
                />
                <label>有效期限</label>
                <div className="period">
                  <label>月</label>
                  <input
                    type ="text"
                  
                  />
                  <label>年</label>
                  <input
                    type ="text"
              
                  /> 
                </div>
                <button>確認</button>
            </form>
        </div>
     );
}
 
export default Check;