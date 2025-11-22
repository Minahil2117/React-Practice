const usersWithtransitions = [{
     id: 1,
     name: "Minha",
     transition:[100,600,500],
},
{
     id: 2,
     name: "Asad",
     transition:[500,100,200],
},
{
     id: 3,
     name: "Minal",
     transition:[900,500],
},
{
     id: 4,
     name: "Ksinat",
     transition:[6000,900,1500],
}
];
const fetch_User = (id, rec_User_Func) =>
{
    setTimeout(() => {
        const selectedUser = usersWithtransitions.find(user => user.id === id);
    if (selectedUser) {
        console.log("Selected User Details:",selectedUser);
        rec_User_Func(selectedUser)    
    }
    else {
        console.log("No User Found!");
        rec_User_Func(null);
    }

    },3000);
};
const transition_History = (selectedUser,transition_Sum) => {
    setTimeout(() =>{
        const transitionAmounts = selectedUser?.transition;
        if (transitionAmounts&& transitionAmounts.length>0){ 
        console.log("Transtion History:",transitionAmounts);
        transition_Sum(transitionAmounts);}
        else { 
        console.log("No Transition Found!");
        transition_Sum(null); }   
    },2000);
};

const transition_Sum = (transitionAmounts) => {
    setTimeout(() => {
        if (transitionAmounts) {
            let sum_trans = 0;
            transitionAmounts.forEach((amount) => sum_trans += amount );
            console.log(" Total Transition Sum:", sum_trans);
        }else{
                console.log("No Transition To Sum");
                
            } 
            
                
            });

        };
        fetch_User(2,(selectedUser) => {
            if (selectedUser) {
                transition_History (selectedUser, transition_Sum);
            };
        });
    