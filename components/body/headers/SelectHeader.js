// npm i --save react-select
import Select from 'react-select';
import classes from './SelectHeader.module.css';


function SelectHeader(props) {

    const getSelectedData = props.selected_data;
    const setCurrData = props.set_state;
    
    const options = [
        { value: 'movies', label: 'Movies' },
        { value: 'series', label: 'Series' },
        { value: 'documentaries', label: 'Documentaries' },
        { value: 'others', label: 'Other Shows' }
      ];

    const customStyles = {

        // select bar
        control: (styles) => ({ 
            ...styles, 
            backgroundColor: 'rgb(23,23,23)', 
            borderColor: 'white'
        }),

        //when selecting
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'black' : 'white',
        }),

        // select...
        placeholder: (styles) => ({ ...styles, color: 'rgb(210,210,210)' }), 

        // select list
        menu: (styles) => { 
            const backgroundColor = 'rgb(50, 50, 50)';
            const marginTop = '1px';
            return { ...styles, backgroundColor, marginTop }
        },

    };

    // const setSelectData = props.select_data;
    function handleChange(event) {
        // console.log(event.value);
        // setSelectData(event.value);
        setCurrData(getSelectedData(event.value));
    }


    return (
        <div className={classes.select}>
            <Select 
                defaultValue={options[0]} 
                closeMenuOnSelect={true}
                options={options} 
                styles={customStyles}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary: 'white',  // selected option and select bar border change
                        primary50: 'grey',  // click on option
                        primary25: 'rgb(187, 0, 0)',  // hover on option
                        neutral80: 'white',  // selected text in select bar
                    },
                  })}
                  instanceId={'categoryType'}
                  onChange={handleChange}
            />
        </div>
    )
};

export default SelectHeader;



