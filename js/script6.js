let a=10;
{
    let a=20;
    {
        let a=30;
        {
            let a=40;
            {
                let a=50;
                {
                    let a=60;
                    console.log('Level 6 ->',a);
                }
                console.log('Level 5 ->',a);
            }
            console.log('Level 4 ->',a);
        }
        console.log('Level 3 ->',a);
    }
    console.log('Level 2 ->',a);
}
console.log('Level 1 ->',a);
