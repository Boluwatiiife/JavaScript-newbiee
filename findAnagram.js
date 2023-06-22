function anagram(word1,word2){
    let first=word1.split('');
    let one=first.sort();
    let y=one.join('');


    let second=word2.split('');
     let two=second.sort();
     let x=two.join('');

    if(x===y){
        return true;
    }
    else{
        return false;
    }
}
console.log(anagram('anagram','nagaram'));
console.log(anagram('rat','car'));
console.log(anagram('dara','aard'));