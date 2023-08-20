import { IconDTO, IconProps, IIcons } from './types'
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WindowIcon from '@mui/icons-material/Window';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const adjIconProps = (props: IconProps) => {
  const newProps: IconProps = {}
  newProps.color = props.color || defaultValues.color
  return newProps
}

const defaultValues: IconProps = {
  size: 16,
  color: '#000',
}

const Add = (props: IconProps) => (
    <AddIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const OpenInNew = (props: IconProps) => (
    <OpenInNewIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const PlayCircle = (props: IconProps) => (
    <PlayCircleIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const FormatListBulleted = (props: IconProps) => (
    <FormatListBulletedIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const Window = (props: IconProps) => (
    <WindowIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const Search = (props: IconProps) => (
    <SearchIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const Close = (props: IconProps) => (
  <CloseIcon sx={{ fontSize: props.size, color: props.color }}/>
)

const UserLogged = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20.9995" cy="21" r="18.9" fill="#C1C5CF"/>
  <path d="M21.0005 33.6C16.6255 33.6 12.758 31.36 10.5005 28C10.553 24.5 17.5005 22.575 21.0005 22.575C24.5005 22.575 31.448 24.5 31.5005 28C30.3435 29.7227 28.7807 31.1345 26.9497 32.1111C25.1187 33.0876 23.0756 33.5989 21.0005 33.6ZM21.0005 8.75C22.3929 8.75 23.7282 9.30312 24.7128 10.2877C25.6974 11.2723 26.2505 12.6076 26.2505 14C26.2505 15.3924 25.6974 16.7277 24.7128 17.7123C23.7282 18.6969 22.3929 19.25 21.0005 19.25C19.6081 19.25 18.2727 18.6969 17.2882 17.7123C16.3036 16.7277 15.7505 15.3924 15.7505 14C15.7505 12.6076 16.3036 11.2723 17.2882 10.2877C18.2727 9.30312 19.6081 8.75 21.0005 8.75ZM21.0005 3.5C18.7024 3.5 16.4267 3.95265 14.3035 4.83211C12.1803 5.71157 10.2511 7.00061 8.62612 8.62563C5.34423 11.9075 3.50049 16.3587 3.50049 21C3.50049 25.6413 5.34423 30.0925 8.62612 33.3744C10.2511 34.9994 12.1803 36.2884 14.3035 37.1679C16.4267 38.0474 18.7024 38.5 21.0005 38.5C25.6418 38.5 30.093 36.6563 33.3749 33.3744C36.6567 30.0925 38.5005 25.6413 38.5005 21C38.5005 11.3225 30.6255 3.5 21.0005 3.5Z" fill="#2A2E39"/>
  <circle cx="32" cy="32" r="8" fill="#93BC1E"/>
  <path d="M32.0003 34.2801C31.8808 34.2801 31.7614 34.2344 31.6703 34.1434L28.8038 31.2768C28.6214 31.0945 28.6214 30.7988 28.8038 30.6166C28.986 30.4343 29.2816 30.4343 29.464 30.6166L32.0003 33.153L34.5367 30.6167C34.719 30.4344 35.0146 30.4344 35.1968 30.6167C35.3793 30.7989 35.3793 31.0946 35.1968 31.2769L32.3304 34.1435C32.2392 34.2345 32.1198 34.2801 32.0003 34.2801Z" fill="white"/>
  </svg>
)

export const IconList = {
  FormatListBulleted,
  PlayCircle,
  UserLogged,
  OpenInNew,
  Window,
  Search,
  Close,
  Add,
}

const Icon: React.FC<IconDTO> = (props) => {
  const { name, size, color } = props
  const typedIcons: IIcons = IconList
  let SelectedIcon = typedIcons[name]

  if (SelectedIcon === undefined) {
    SelectedIcon = typedIcons.IconNone
  }

  return (
    <SelectedIcon color={color} size={size} />
  )
}

export default Icon
