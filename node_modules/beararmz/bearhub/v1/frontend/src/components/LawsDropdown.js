import ReactSelect from 'react-select';
import '../styles/LawsDropdown.css';

const LawsDropdown = ({ stateData, lawData, onStateChange, onLawChange }) => {
  return (
    <div className="laws-dropdown">
      <ReactSelect
        options={stateData.map(state => ({ value: state.id, label: state.name }))}
        onChange={(selectedOption) => onStateChange(selectedOption.value)}
        placeholder="Select a State"
      />
      <ReactSelect
        options={lawData.map(law => ({ value: law.id, label: law.name }))}
        onChange={(selectedOption) => onLawChange(selectedOption.value)}
        placeholder="Select a Law"
      />
    </div>
  );
};

export default LawsDropdown;
