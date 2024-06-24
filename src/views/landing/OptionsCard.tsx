import { CustomCard, CustomCardContent, CustomCardHeader, CustomFormControl } from 'src/views/custom/CustomCard';
import { 
  MonitorShimmer as MonitorShimmerIcon,
  TruckOutline as TruckOutlineIcon,
  Tune as TuneIcon,
  Lan as LanIcon,
  FountainPenTip as FountainPenTipIcon,
  WindowShutterSettings as WindowShutterSettingsIcon,
  InformationOutline as InformationOutlineIcon,
  PlusCircleOutline as PlusCircleOutlineIcon,
} from 'mdi-material-ui'
import { Box, Button, FormHelperText, Grid, InputAdornment, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import IOSSwitch from '../custom/IOSSwitch';
import { styled, useTheme } from '@mui/material/styles';
import OptionsCardSwitchPart from './OptionsCardSwitchPart';
import OptionsCardTaxPart from './OptionsCardTaxPart';
import OptionsCardFinalPart from './OptionsCardFinalPart';

interface MyCardProps {
  values: HomeState
  handleChange: (prop: keyof HomeState) => (event: ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (prop: keyof HomeState) => (event: SelectChangeEvent<any>) => void
  handleCheckedChange: (prop: keyof HomeState) => (event: React.ChangeEvent<HTMLInputElement>) => void
}

const OptionsCard = ({ values, handleChange, handleSelectChange, handleCheckedChange}: MyCardProps) => {
  const theme = useTheme();

  return <>    
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader>
          <TuneIcon className={'cardheader-icon'} />
          <Typography className={'cardheader-title'} variant='h4'>Options</Typography>
        </CustomCardHeader>
        
        {/** BEGIN Options_card_switch_part */}
        <OptionsCardSwitchPart values={values} handleChange={handleChange} handleSelectChange={handleSelectChange} handleCheckedChange={handleCheckedChange}/>              
        {/** END Options_card_switch_part */}

        {/** BEGIN Options_card_tax_part */}
        <OptionsCardTaxPart values={values} handleChange={handleChange} handleSelectChange={handleSelectChange} handleCheckedChange={handleCheckedChange}/>
        {/** END Options_card_tax_part */}

        {/** BEGIN Options_card_final_part */}
        <OptionsCardFinalPart values={values} handleChange={handleChange} handleSelectChange={handleSelectChange} handleCheckedChange={handleCheckedChange}/>
        {/** END Options_card_final_part */}
      </CustomCardContent>
    </CustomCard>
  </>
}

export default OptionsCard;