import React, { useState, useEffect } from "react";
import { IoNotificationsOutline, IoMailUnreadOutline, IoMailOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from "../../store/actions/signIn";
import axios from "axios";
import moment from "moment";
import './Header.css';

const Header = (props) => {
	const [notification, setNotification] = useState(false);
	const [notiData, setNotiData] = useState([])

	useEffect(() => {
		axios.get("https://mockend.com/biorelate/fe-mock-api/notification")
			.then(res => {
				var sorted_Date = res.data.sort((a, b) => {
					return new Date(b.timestamp).getYear() -
						new Date(a.timestamp).getYear()
				})

				setNotiData(sorted_Date);
			})
	}, []);

	return (
		<div className="header">
			<div className="header-left">
				<div className="logo">
					<Link to="/">Galactic</Link>
				</div>
				<div className="menu-container">
					<ul className="menu">
						<Link className="menu-item" to="/home">Home</Link>
						<li className="menu-item">Categories</li>
						<li className="menu-item">Feeds</li>
					</ul>
				</div>
			</div>
			<div className="header-right">
				<div className="notifications">
					<div className="iconWp">
						<IoNotificationsOutline className='notification-icon' size={24} onClick={() => setNotification(!notification)} />
					</div>
					<span className='badge'>4</span>

					<div className={`dropdown-content ${notification && 'show'}`}>
						<ul>
							{
								notiData.slice(0, 10).reverse().map((item, index) => {
									return (
										<li key={index}>
											<span className="icon">
												{
													item.read ?
														<IoMailOutline /> :
														<IoMailUnreadOutline />
												}
											</span>
											<span className="title">{item.title}</span>
											<span className="date">{moment(item.timestamp).format('LL')}</span>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className="header-profile-img">
					<img src="/images/Rectangle 2.png" alt="" />
				</div>
				<div className="save-changes">
					<button onClick={() => props.attemptLogout()}>Log out</button>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		attemptLogout: () => dispatch(logoutUser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);