var p1,p2;
var count = 0;
var arr = [[],[],[]];
var m,n;
for(m=0;m<3;m++)
{
    for(n=0;n<3;n++)
    arr[m][n] = 0;
}
function start_game()
{
    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;
    if(p1==''||p2=='')
    alert("Enter two valid names");
    else{
    document.getElementById("player_name").style.display = "none";
    document.getElementById("main_game").style.display = "";
    document.getElementById("instruct").innerHTML = "Game starts, "+  p1+" it's your turn";
    }
}
function input(inCell)
{
    document.getElementById("instruct").innerHTML = p1+" it's your turn";
    if(document.getElementById(inCell.id).innerHTML == 'X'||document.getElementById(inCell.id).innerHTML == 'O')
    return 0;
    else if(count%2==0){
        arr[(inCell.id[0]-1)][(inCell.id[2]-1)]="X";
        document.getElementById(inCell.id).innerHTML = 'X';
        document.getElementById("instruct").innerHTML = p2+" it's your turn";
    }
    else
    {
        arr[(inCell.id[0]-1)][(inCell.id[2]-1)]="O"
        document.getElementById(inCell.id).innerHTML = 'O';
        document.getElementById("instruct").innerHTML = p1+" it's your turn";
    }
    count++;
    check();
    if(arr[0][2]==arr[1][2]&&arr[1][2]==arr[2][2])
    {
        if(arr[0][2]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][2]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    if(arr[2][0]==arr[2][1]&&arr[2][1]==arr[2][2])
    {
        if(arr[2][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[2][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    if(arr[2][0]==arr[2][1]&&arr[2][1]==arr[2][2])
    {
        if(arr[2][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[2][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    if(arr[0][1]==arr[1][1]&&arr[1][1]==arr[2][1])
    {
        if(arr[0][1]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][1]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
}
function check()
{
    if(arr[0][0]==arr[0][1]&&arr[0][1]==arr[0][2])
    {
        if(arr[0][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    
    }
    else if((arr[1][0]==arr[1][1]&&arr[1][1]==arr[1][2]))
    {
        if(arr[1][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[1][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[2][0]==arr[2][1]&&arr[2][1]==arr[2][2])
    {
        if(arr[2][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[2][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[0][0]==arr[1][0]&&arr[1][0]==arr[2][0])
    {
        if(arr[0][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[0][1]==arr[1][1]&&arr[1][1]==arr[2][1])
    {
        if(arr[0][1]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][1]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[0][2]==arr[1][2]&&arr[1][2]==arr[2][2])
    {
        if(arr[0][2]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][2]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[0][2]==arr[1][2]&&arr[1][2]==arr[2][2])
    {
        if(arr[0][2]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][2]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[0][0]==arr[1][1]&&arr[1][1]==arr[2][2])
    {
        if(arr[0][0]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][0]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }
    else if(arr[0][2]==arr[1][1]&&arr[1][1]==arr[2][0])
    {
        if(arr[0][2]=='X')
        document.getElementById("instruct").innerHTML = "Game Over... "+p1+" wins";
        else if(arr[0][2]=='O')
        document.getElementById("instruct").innerHTML = "Game Over... "+p2+" wins";
    }

    else if(count>=9)
    document.getElementById("instruct").innerHTML = "Game Over... Restart to play again.";
}
function reset()
{
    var a,b;
    document.getElementById("instruct").innerHTML = "Game starts, "+  p1+" it's your turn";
    for(a=0;a<3;a++)
    {
        for(b=0;b<3;b++)
        {
            arr[a][b]=0;
            document.getElementById((a+1)+'x'+(b+1)).innerHTML = '';
        }
    }
    count = 0;
}
