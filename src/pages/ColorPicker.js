import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components/import";

function change(params) {
  document.getElementById("preview").style.backgroundColor = params.value;
}

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Color Picker" />
      <div className=" text-center">
        <div id="preview" />
        <div className="flex gap-20 flex-wrap justify-center items-center">
          <div>
            <p className="text-2xl mb-4 mt-2 font-semibold ">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              change={change}
              inline
              showButtons={false}
              modeSwitcher={false}
            />
          </div>
          <div>
            <p className="text-2xl mb-4 mt-2 font-semibold ">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              change={change}
              inline
              showButtons={false}
              modeSwitcher={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
