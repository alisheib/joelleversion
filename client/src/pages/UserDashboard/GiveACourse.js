import React from 'react'
import SideBar from '../../components/General/Sidebar'
import mapTimeZones from '../../components/timeZone'
function GiveACourse() {
	return (

		<div>
			<SideBar />

			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
			<main className="content">
				<div className="container-fluid p-0">
					<div className="container">
						<div className="row">
							<div className="col-lg-10 col-xl-10">

							</div> {/* end col*/}
							<div className="col-lg-12 col-xl-12">
								<div className="card-box">

									<div className="tab-pane" id="settings">
										<form>
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label htmlFor="firstname">Course Title</label>
														<input type="text" className="form-control" id="coursetitle" placeholder="Change course title" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label htmlFor="firstname">Course Genre</label>
														<input type="text" className="form-control" id="coursegenre" placeholder="Change course genre" />
													</div>
												</div>
											</div> {/* end row */}
											<div className="row">
												<div className="col-12">
													<div className="form-group">
														<label htmlFor="userbio">Description</label>
														<textarea className="form-control" id="coursedescription" rows={4} placeholder="Change course description..." defaultValue={""} />
													</div>
												</div> {/* end col */}
											</div> {/* end row */}
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>Thumbnail</label>
														<input type="file" id="file" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label>Change Date</label>
														<br />
														<input type="date" id="date" />
													</div>
												</div> {/* end col */}
											</div> {/* end row */}
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>Change time zone</label>
														<select style={{ fontFamily: '"PT Sans", sans-serif', fontSize: '0.9rem', display: 'block', padding: '0.5rem 1rem', width: '100%' }}>
															{mapTimeZones()}
														</select>
													</div>
												</div>
											</div> {/* end row */}
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label htmlFor="firstname">Change start time</label>
														<input type="time" defaultValue="13:00" style={{ fontFamily: '"PT Sans", sans-serif', fontSize: '1.0rem', display: 'block', padding: '0.5rem 1rem' }} />
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label htmlFor="firstname">Change end time</label>
														<input type="time" defaultValue="13:00" style={{ fontFamily: '"PT Sans", sans-serif', fontSize: '1.0rem', display: 'block', padding: '0.5rem 1rem' }} />
													</div>
												</div>
											</div> {/* end row */}
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label htmlFor="firstname">Course Cost</label>
														<input type="text" className="form-control" id="coursecost" placeholder="Change course cost" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label htmlFor="firstname">Course Type</label>
														<div className="form-check"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
															<label className="form-check-label" htmlFor="flexRadioDefault1"> Individual Session
                            </label>
														</div>
														<div className="form-check"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
															<label className="form-check-label" htmlFor="flexRadioDefault1"> Group Session
                            </label>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<button type="button" className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Cancel</button>
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<button type="button" className="btn btn-success btn-xs waves-effect mb-2 waves-light">Create</button>
													</div>
												</div>
											</div>
										</form>
									</div>
									{/* end settings content*/}
								</div> {/* end card-box*/}
							</div> {/* end col */}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
export default GiveACourse