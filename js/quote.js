 /* 随机添加数据 */
 setInterval(() => {
     // 数据
     let datum = [
         [78524, 48675, 33485, 88754, 25800],
         [15243, 18647, 26435, 22965, 14736],
         [1345, 2257, 4352, 2654, 1115, 1437, 530, 1185, 2263, 2524, 5643]
     ]
     let sj1 = document.getElementById('datum1')
     let sj2 = document.getElementById('datum2')
     let sj3 = document.getElementById('datum3')
     let sj4 = document.getElementById('datum4')
     let sj5 = document.getElementById('datum5')
         // 得到一个两数之间的随机整数，包括两个数在内
     function getRandomIntInclusive(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
     }
     let index_1 = getRandomIntInclusive(0, datum[0].length - 1)
     let index_2 = getRandomIntInclusive(0, datum[1].length - 1)
     let index_3 = getRandomIntInclusive(0, datum[2].length - 1)
     sj1.innerText = datum[0][index_1]
     sj2.innerText = datum[1][index_2]
     sj3.innerText = datum[1][index_2]
     sj4.innerText = datum[2][index_3]
     sj5.innerText = datum[2][index_3]
 }, 300);