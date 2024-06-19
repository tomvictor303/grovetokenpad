// ** MUI Imports
import Grid from '@mui/material/Grid'

import { styled, useTheme } from '@mui/material/styles';

// ** LandingPage Components Imports
import TopExperts from 'src/views/landing/TopExperts'

// ** Demo Components Imports
import LawyersCategory from 'src/views/landing/LawyersCategory'
import DoctorsCategory from 'src/views/landing/DoctorsCategory'
import ExerciseCategory from 'src/views/landing/ExerciseCategory'
import { Badge, Box, Button, Card, CardContent, CardHeader, Checkbox, Chip, FormControl, FormHelperText, Link, MenuItem, Paper, Select, SelectChangeEvent, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { 
  MonitorShimmer as MonitorShimmerIcon,
  TruckOutline as TruckOutlineIcon,
  Tune as TuneIcon,
  Lan as LanIcon,
  FountainPenTip as FountainPenTipIcon,
  WindowShutterSettings as WindowShutterSettingsIcon,
  InformationOutline as InformationOutlineIcon,
} from 'mdi-material-ui'
import { BorderRadius } from 'mdi-material-ui';
import { ChangeEvent, useState } from 'react';
import IOSSwitch from 'src/views/custom/IOSSwitch';

const CustomCard = styled(Card)(({ theme }) => ({
  // borderRadius: theme.shape.borderRadius * 2,
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

const CustomCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(5),

  '& .cardheader-icon': {
    color: theme.palette.success.main,
  },
  '& .cardheader-title': {
    color: theme.palette.customColors.semiwhite,
  },
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(7),
  '& .control-title': {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  '& .control-element': {
    marginBottom: theme.spacing(2),
  },
  '& .control-element .MuiOutlinedInput-input': {
    color: theme.palette.customColors.semiwhite, // style for inputed text
    paddingTop: '12px',
    paddingBottom: '12px',
    borderWidth: '5px',
  },
  '& .control-element fieldset': {
    borderWidth: '2px',
    borderColor: '#777E90'
  },
  '& .control-help': {
    margin: 0,
  },
  '& .control-switch-title': {
    color: theme.palette.customColors.semiwhite,
  }
})); 

interface State {
  token_type: number
  token_name: string
  token_symbol: string
  token_decimals: number
  //////////////////////
  supply_type: 'Fixed' | 'Capped' | 'Unlimited'
  initial_supply: number
  maximum_supply: number
  //////////////////////
  isConformedERC20: boolean
  isVerifiedOnEtherscan: boolean,
  isNoCopyrightLink: boolean,
  isMintable: boolean,
  isBurnable: boolean,
  isPausable: boolean,
  isRecoverable: boolean,
  isAntiWhale: boolean,
  isTax: boolean,
}

const LandingPage = () => {
  const theme = useTheme();
  const block_spacing = 6;

  // ** States
  const [values, setValues] = useState<State>({
    token_type: 0,
    token_name: '',
    token_symbol: '',
    token_decimals: 18,
    //////////////////////
    supply_type: 'Fixed',
    initial_supply: 0,
    maximum_supply: 10000000,
    //////////////////////
    isConformedERC20: false,
    isVerifiedOnEtherscan: false,
    isNoCopyrightLink: false,
    isMintable: false,
    isBurnable: false,
    isPausable: false,
    isRecoverable: false,
    isAntiWhale: false,
    isTax: false,
  })

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleSelectChange = (prop: keyof State) => (event: SelectChangeEvent<any>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleCheckedChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.checked })
  };

  return (
    <Grid container spacing={block_spacing}>
      <Grid item xs={12}>
        <Box textAlign={'center'} py={15}>
          <Typography variant='h2' mb={4} style={{color: theme.palette.customColors.semiwhite}}>Create your Token on <span style={{ color: theme.palette.success.main }}>Ethereum</span></Typography>
          <Typography variant='h5'>Easily deploy your Smart Contract for a Standard, Capped, Mintable, Burnable ERC20 Token.</Typography>
          <Typography variant='h5'>No login. No setup. No coding required.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={block_spacing}>
          {/** BEGIN Informations_card */}
          <CustomCard>
            <CustomCardContent>
              <CustomCardHeader>
                <MonitorShimmerIcon className={'cardheader-icon'} />
                <Typography className={'cardheader-title'} variant='h4'>Informations</Typography>
              </CustomCardHeader>

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>TOKEN TYPE*</Typography>
                <Select 
                  className={'control-element'}
                  value={values.token_type}
                  onChange={handleSelectChange('token_type')}
                  displayEmpty           
                >
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value={0}>Free</MenuItem>
                  <MenuItem value={1}>Basic</MenuItem>
                  <MenuItem value={2}>Custom</MenuItem>
                </Select>
                <FormHelperText className={'control-help'}>Select the base configuration of your token (Free and Basic have limited configurations)</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>TOKEN NAME*</Typography>
                <TextField 
                  className={'control-element'}
                  value={values.token_name}
                  onChange={handleChange('token_name')}
                  placeholder="My new token name"           
                />
                <FormHelperText className={'control-help'}>The name of your token</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>TOKEN SYMBOL*</Typography>
                <TextField 
                  className={'control-element'}
                  value={values.token_symbol}
                  onChange={handleChange('token_symbol')}
                  placeholder="TKN"           
                />
                <FormHelperText className={'control-help'}>Your token's symbol (e.g ETH)</FormHelperText>
              </CustomFormControl>            

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>DECIMALS*</Typography>
                <TextField 
                  className={'control-element'}
                  value={values.token_decimals}
                  onChange={handleChange('token_decimals')}
                  placeholder=""
                  type="number"
                  inputProps={{
                    min: 1,
                    max: 18,
                    pattern: "\\d*",
                  }}
                />
                <FormHelperText className={'control-help'}>The number of decimal of your token (default 18)</FormHelperText>
              </CustomFormControl>
            </CustomCardContent>
          </CustomCard>
          {/** END Informations_card */}

          {/** BEGIN Supply_card */}
          <CustomCard>
            <CustomCardContent>
              <CustomCardHeader>
                <TruckOutlineIcon className={'cardheader-icon'} />
                <Typography className={'cardheader-title'} variant='h4'>Supply</Typography>
              </CustomCardHeader>

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>SUPPLY TYPE*</Typography>
                <Select 
                  className={'control-element'}
                  value={values.supply_type}
                  onChange={handleSelectChange('supply_type')}
                  displayEmpty           
                >
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value={'Fixed'}>Fixed</MenuItem>
                  <MenuItem value={'Capped'}>Capped</MenuItem>
                  <MenuItem value={'Unlimited'}>Unlimited</MenuItem>
                </Select>
                <FormHelperText className={'control-help'}>Fixed / Capped / Unlimited</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>INITIAL SUPPLY</Typography>
                <TextField 
                  className={'control-element'}
                  value={values.initial_supply}
                  onChange={handleChange('initial_supply')}
                  placeholder=""
                  type="number"
                  inputProps={{
                    min: 0,
                    pattern: "\\d*",
                  }}
                />
                <FormHelperText className={'control-help'}>The number of coins minted during the creation of the contract</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Typography className={'control-title'} variant='caption'>MAXIMUM SUPPLY*</Typography>
                <TextField 
                  className={'control-element'}
                  value={values.maximum_supply}
                  onChange={handleChange('maximum_supply')}
                  placeholder=""
                  type="number"
                  inputProps={{
                    pattern: "\\d*",
                  }}
                />
                <FormHelperText className={'control-help'}>The maximum number of coins you can mint from the contract</FormHelperText>
              </CustomFormControl>
            </CustomCardContent>
          </CustomCard>
          {/** END Supply_card */}
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={block_spacing}>
          {/** BEGIN Options_card */}
          <CustomCard>
            <CustomCardContent>
              <CustomCardHeader>
                <TuneIcon className={'cardheader-icon'} />
                <Typography className={'cardheader-title'} variant='h4'>Options</Typography>
              </CustomCardHeader>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isConformedERC20} onChange={handleCheckedChange('isConformedERC20')}
                  />
                  <Typography className={'control-switch-title'}>Conforms to ERC20 protocol</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Your token will const all the functionalities, and conforms to ERC20 protocol</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isVerifiedOnEtherscan} onChange={handleCheckedChange('isVerifiedOnEtherscan')}
                  />
                  <Typography className={'control-switch-title'}>Verified on Etherscan</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Your token will const all the functionalities, and conforms to ERC20 protocol</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isNoCopyrightLink} onChange={handleCheckedChange('isNoCopyrightLink')}
                  />
                  <Typography className={'control-switch-title'}>No copyright link</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>A link pointing to this page will be added in the description of your contract (Free and Basic contracts only)</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isMintable} onChange={handleCheckedChange('isMintable')}
                  />
                  <Typography className={'control-switch-title'}>Mintable</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Allow the creation of new tokens in the future</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isBurnable} onChange={handleCheckedChange('isBurnable')}
                  />
                  <Typography className={'control-switch-title'}>Burnable</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Allow your tokens to be burned</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isPausable} onChange={handleCheckedChange('isPausable')}
                  />
                  <Typography className={'control-switch-title'}>Pausable</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Allow your tokens to be paused</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isRecoverable} onChange={handleCheckedChange('isRecoverable')}
                  />
                  <Typography className={'control-switch-title'}>Recoverable</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Allow to recover any ERC20 tokens sent to your contract</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isAntiWhale} onChange={handleCheckedChange('isAntiWhale')}
                  />
                  <Typography className={'control-switch-title'}>Anti Whale</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Add a tax on transactions.</FormHelperText>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack className={'control-element'} direction={'row'} alignItems={'center'} spacing={3}>
                  <IOSSwitch 
                    checked={values.isTax} onChange={handleCheckedChange('isTax')}
                  />
                  <Typography className={'control-switch-title'}>Tax</Typography>
                </Stack>
                <FormHelperText className={'control-help'}>Add a tax on transactions.</FormHelperText>
              </CustomFormControl>
            </CustomCardContent>
          </CustomCard>
          {/** END Options_card */}
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={block_spacing}>
          {/** BEGIN Network_card */}
          {/* <CustomCard>
            <CustomCardContent>
              <CustomCardHeader>
                <LanIcon className={'cardheader-icon'} />
                <Typography className={'cardheader-title'} variant='h4'>Network</Typography>
              </CustomCardHeader>
            </CustomCardContent>
          </CustomCard> */}
          {/** END Network_card */}
          
          {/** BEGIN Agreement_card */}
          <CustomCard>
            <CustomCardContent>
              <CustomCardHeader>
                <FountainPenTipIcon className={'cardheader-icon'} />
                <Typography className={'cardheader-title'} variant='h4'>Agreement</Typography>
              </CustomCardHeader>

              <CustomFormControl fullWidth>
                <Stack direction={'row'} alignItems={'flex-start'} spacing={1}>
                  <Checkbox color="success" />
                  <Typography>
                    I have read, understood and agreed to the <Link className='cursorPoint' style={{ display: 'inline', color: theme.palette.success.main, textDecoration: 'underline'}}>Terms of Use</Link>.
                  </Typography>
                </Stack>
              </CustomFormControl>
            </CustomCardContent>
          </CustomCard>
          {/** END Agreement_card */}
          
          {/** BEGIN Transaction_card */}
          <CustomCard>
            <CustomCardContent>
              <CustomCardHeader>
                <WindowShutterSettingsIcon className={'cardheader-icon'} />
                <Typography className={'cardheader-title'} variant='h4'>Transaction</Typography>
              </CustomCardHeader>

              <CustomFormControl fullWidth>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={1}>
                    <Typography>Commission Fee:</Typography>
                    <Tooltip title="Commission Fee that you need to create token" className='cursorPoint'>
                      <InformationOutlineIcon className='extra-small-icon' color='success' />
                    </Tooltip>
                  </Stack>
                  <Chip label="0.55 ETH" color="success" variant="filled" />
                </Stack>
              </CustomFormControl>

              <CustomFormControl fullWidth>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={1}>
                    <Typography>Gas Fee:</Typography>
                    <Tooltip title="Gas Fee will be consumed during network" className='cursorPoint'>
                      <InformationOutlineIcon className='extra-small-icon' color='success' />
                    </Tooltip>
                  </Stack>
                  <Chip label="Variable" color="primary" variant="filled" />
                </Stack>
              </CustomFormControl>
            </CustomCardContent>
          </CustomCard>
          {/** END Transaction_card */}
          
          {/** BEGIN confirm_button */}
          <Box>            
            <Button variant="contained" fullWidth color="success">Confirm</Button>
          </Box>
          {/** END confirm_button */}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LandingPage
