const routes = [
    {
      name: 'M1',
      comp: 'C1',
    },
    {
      name: 'M2',
      comp: 'C2',
    },
    {
      name: 'M3',
      subComp: [
        {
          name: 'M3A',
          comp: 'C3A',
        },
        {
          name: 'M3B',
          comp: 'C3B',
        },
      ],
    },
    {
      name: 'M4',
      subComp: [
        {
          name: 'M4A',
          comp: 'C4A',
        },
        {
          name: 'M4B',
          comp: 'C4B',
        },
      ],
    },
    {
      name: 'M5',
      subComp: [
        {
          name: 'M5A',
          comp: 'C5A',
        },
        {
          name: 'M5B',
          subComp: [
            {
              name: 'M5BA',
              comp: 'C5BA',
            },
            {
              name: 'M5BB',
              comp: 'C5BB',
            },
            {
              name: 'M5BC',
              comp: 'C5BC',
            },
          ],
        },
        {
          name: 'M5C',
          comp: 'C5C',
        },
      ],
    },
  ];
  
const subscription = [
    {
      name: 'M1',
      isSub: true,
    },
    {
      name: 'M2',
      isSub: false,
    },
    {
      name: 'M3',
      isSub: false,
      subMod: [
        {
          name: 'M3A',
          isSub: true,
        },
        {
          name: 'M3B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M4',
      isSub: true,
      subMod: [
        {
          name: 'M4A',
          isSub: false,
        },
        {
          name: 'M4B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M5',
      isSub: true,
      subMod: [
        {
          name: 'M5A',
          isSub: false,
        },
        {
          name: 'M5B',
          isSub: true,
  
          subComp: [
            {
              name: 'M5BA',
              isSub: false,
            },
            {
              name: 'M5BB',
              isSub: true,
            },
            {
              name: 'M5BC',
              isSub: false,
            },
          ],
        },
        {
          name: 'M5C',
          isSub: true,
        },
      ],
    },
  ];


function base(subscription, routes){
    let arr = [];
    let flag =1;
    for( let element of subscription){
        if(element.isSub && flag===1){
            let obj1 = {redirectTo : element.name};
            arr.push(obj1);
            flag =-1;
        }
        if(element.isSub && element.hasOwnProperty("subMod")){
            let array;
            for (const ele of routes) {
                if(ele.name=== element.name){
                    array= ele.subComp;
                }

            }
            let obj = {name: element.name,subComp: derived(element.subMod, array)}
            arr.push(obj);

        }
        else if(element.isSub ){
            let obj2 = {};
            for (const ele of routes) {
                if(ele.name=== element.name){
                    obj2 = {
                        name:ele.name,
                        comp : ele.comp};
                    arr.push(obj2);
                    break;
                }
            }
        }

    }
    return arr;
}


function derived(subscription, routes){
    let array =[];
    for(let element of subscription){
        if(element.isSub){
           array.push({redirectTo:  element.name});
            break;
        }
    }
    for(let element of subscription){
        if(element.isSub ){
            let obj2 = {};
            if(element.hasOwnProperty('subComp')){
                let arr;
                for (const ele of routes) {
                    if(ele.name=== element.name){
                        arr= ele.subComp;
                    }
                }
                array.push({name: element.name, comp :derived(element.subComp,arr)});
            }
            else{
                for(const ele of routes){
                    if(element.name == ele.name){
                        obj2 = {
                            name:ele.name,
                            comp : ele.comp
                        };
                        array.push(obj2);
                        break;
                    }
                }
            }

        }
        else{
            let obj = {name: element.name, comp:"UN"};
            array.push(obj);
        }
    }
    return array;
}


let Json = base(subscription,routes);

console.log(JSON.stringify(Json,null, 2))