let morse =
{
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
  }

  function encode(str) {

    let encoded = " ";

    for (l of str)
    {
        for( key in morse)
        {
            if (l == key)
            {
                encoded += morse[key];
            }

    }
    
     
  }
//   console.log(encoded);
}
  encode("hello world");
  encode("we love javascript");

  function decode(str) {

    let coded = str.split(" ");
    let decoded = "";

    // console.log(coded)
        for( l of coded)
        {
            if(l === "")
            {
                decoded+=" "
            }
            else
            {
            for (key in morse)
            {   
            if ( l == morse[key])
            {  
                decoded+= key; 
            }
        }
            
        }
        }
  console.log(decoded);
}
decode("... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .");
decode("-.-- --- ..- .-.  .. -. ... - .-. ..- -.-. - --- .-. ...  .-- .. ... ....  -.-- --- ..- .-.  .-  -. .. -.-. .  .-- . . -.- . -. -..")
decode("-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-")
decode("..  .-.. --- ...- .  - ---  -... .  -.-. .... .- .-.. .-.. . -. --. . -..  ... .- -.-- ...  - .... .  ... . ..  .--- . -.. -.. .- ....  -.-. .-.. .- ... ...  --- ..-.  ... . .--. - . -- -... . .-.  ... ---  .-- .  .-- .. .-.. .-..  -.-. .... .- .-.. .-.. . -. --. .  - .... . --")
