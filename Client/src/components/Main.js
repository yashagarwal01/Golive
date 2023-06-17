import './Main.css';
import img from '../logo.png';
import Button from '@mui/material/Button';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import { useState, useMemo, useEffect, useRef } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import Carousel from './Carousel/Carousel';
import { useNavigate } from "react-router-dom";

const Main = () => {
	const [joinbtn, setjoinbtn] = useState(false);
	const date = new Date();
	const [time, settime] = useState(new Date());
	const [meetinglink, setmeetinglink] = useState();
	const meetingLink = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		setInterval(() => settime(new Date()), 1000)
	}, []);

	const current_date = date.getDate();
	const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const current_month = month[date.getMonth()];
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const current_day = day[date.getDay()];
	const current_time = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const handlefocus = (e) => {
		e.preventDefault();
		setjoinbtn(true);
	}
	const joinMeeting = async (e) => {
		e.preventDefault();
		const value = meetingLink.current.value;
		setmeetinglink(value);	
		navigate(`/room/${meetinglink}`);
	}
	return (
		<div className=" main_container">
			<nav className="navbar">
				<div className="logo"><img src={img} />
					<p><b>Go</b>Live</p></div>
				<div className="userDetail">
					<div className="date_time">
						{current_time} <CircleIcon sx={{ fontSize: 5 }} /> {current_day},{current_date} {current_month}
					</div>
					<button className="white_btn" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</nav>
			{/* Lobby */}
			<div className="lobby">
				<div className="lobby_left">
					<div>Premium video meetings. <br /> Now free for everyone.</div>
					<div className="lobby_left_div2">We re-engineered the service that we built for secure business meetings,
						Google Meet, to make it free and available for all.</div>
					<div className="lobby_left_div3">
						<Button variant='contained' size="large" disableElevation startIcon={<VideoCallIcon />}> New meeting</Button>
						<TextField className="lobby_left_div3_text" id="outlined-basic" label="Enter Meeting Code" variant="outlined"
							size='small' type='text' onChange={handlefocus} inputRef={meetingLink}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<KeyboardAltIcon />
									</InputAdornment>
								),
							}} />
						{joinbtn ? <Button variant="text" onClick={joinMeeting} >Join</Button> : <div className='hidden'></div>}
						{/* <button>Join</button> */}
					</div>
					<p className='learn_more'><a href="/"> Learn more</a> about GoLive</p>
				</div>
				<div className="lobby_right">
					<Carousel/>
				</div>
			</div>
		</div>
	);
};

export default Main;