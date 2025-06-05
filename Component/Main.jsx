// // import React, { useState } from 'react'

// // const Main = () => {
// //     const [value,setValue]= useState(0)

// //     function increase(){
// //         setValue(value+1)
// //     }
// //     function decrese(){
// //         setValue(value-1)
// //         if(value==0){
// //             setValue(0)
// //         }
// //     }

// //     function reset (){
// //         setValue(0)
// //     }


// //   return (
   
// //     <>
// //         <div className='w-[800px] h-[500px] border mt-20 justify-center align-center flex bg-yellow-100'>

// //     <div className='w-[400px] h-[300px] border mt-24 bg-white'>
// //         <input type="number"  value={value} className='h-[50px] border w-[150px] mt-6 text-center'/>

         

// //          <div className='mt-[100px] flex justify-around'>

// //         <button  className='border bg-black rounded text-white w-[60px]'  onClick={increase}>add</button>
// //         <button  className='border bg-black rounded text-white w-[60px]'  onClick={decrese}>minus</button>
// //         <button  className='border bg-black rounded text-white w-[60px]'  onClick={reset}>reset</button>

// //          </div>
    



// //     </div>


// //         </div>
    
    
    
    
    
// //     </>




// //   )
// // }

// // export default Main

// import React, { useState } from 'react';

// const Main = () => {
//   const [value, setValue] = useState(0);

//   function increase() {
//     setValue(value + 1);
//   }

//   function decrease() {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   }

//   function reset() {
//     setValue(0);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200">
//       <div className="w-[350px] p-8 rounded-xl shadow-xl bg-white border border-gray-200 flex flex-col items-center">
//         <input
//           type="number"
//           value={value}
//           readOnly
//           className="text-3xl font-semibold text-center border border-gray-300 rounded-md w-32 py-2 mb-8 focus:outline-none"
//         />

//         <div className="flex justify-between gap-4 w-full">
//           <button
//             onClick={increase}
//             className="flex-1 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition duration-200"
//           >
//             Add
//           </button>
//           <button
//             onClick={decrease}
//             className="flex-1 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium transition duration-200"
//           >
//             Minus
//           </button>
//           <button
//             onClick={reset}
//             className="flex-1 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white font-medium transition duration-200"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
