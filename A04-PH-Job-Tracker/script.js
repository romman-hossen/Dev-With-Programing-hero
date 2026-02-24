let interviewList = [];
let rejectedList = [];


let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// console.log(total.innerText)

// card section Button
const totalJobCard = document.getElementById("job-cards");
// interview button 
// const interviewBtn = document.getElementById("btn-interview");
// rejected button
// const rejectedBtn = document.getElementById("btn-rejected" );
// Applied button
const isAppliedBtn = document.getElementById("btn-isApplied");
// Delete btn 
const deleteBtn = document.getElementById("btn-delete");

// interview id
const interviewField = document.getElementById("interview-field");

// /create element 
function interviewSection(){
    interviewField.innerHTML = ''
    for(let interview of interviewList)
    {
        console.log(interview);
        let div = document.createElement("div")
        div.className = 'flex justify-between bg-base-100 p-6 rounded-xl shadow';
        div.innerHTML =`
         <div class="space-y-5">
                <div>
                 <h3 class="company font-bold mb-1">Mobile First Corp</h3>
                  <p class="skill text-gray-400">React Native Developer</p>
                </div>
                <p class="salary text-gray-400">Remote • Full-time • $130,000 - $175,000</p>
                <div>
                <button id="btn-isApplied" class="btn btn-soft mb-2">Not Applied</button>
                <p class="work">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                <div class="flex gap-4">
                    <button id="btn-interview" class="btn-interview btn btn-outline btn-success">interview</button>
                    <button id="btn-rejected" class="btn-rejected btn btn-outline btn-error">Rejected</button>
                </div>  
            </div>
            <div class="">
                <img id="btn-delete" src="./asset/delete.png" alt="">
            </div>
        `

    }
}

// main section 
const main = document.querySelector("main");


// console.log(totalJobCard.innerText)

function totalCount(){
    total.innerText = totalJobCard.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
totalCount();


// toggling button 
const allFilterBtn = document.getElementById("all-filter-btn");
const  interviewFilterBtn= document.getElementById("interview-filter-btn");
const rejectedFilterBTn= document.getElementById("rejected-filter-btn");
function toggleButton(id){
   allFilterBtn.classList.add('text-gray-400','bg-base-100');
   interviewFilterBtn.classList.add('text-gray-400','bg-base-100');
   rejectedFilterBTn.classList.add('text-gray-400','bg-base-100');

   allFilterBtn.classList.remove('text-base-100','bg-blue-500');
   interviewFilterBtn.classList.remove('text-base-100','bg-blue-500');
   rejectedFilterBTn.classList.remove('text-base-100','bg-blue-500');

   const selected = document.getElementById(id);
   selected.classList.remove('text-gray-400','bg-base-100');
   selected.classList.add('text-base-100','bg-blue-500');
}

//*** Main section ***/
main.addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode)
    if(event.target.classList.contains("btn-interview")){

        const parent = event.target.parentNode.parentNode;
        
    }
    
})


