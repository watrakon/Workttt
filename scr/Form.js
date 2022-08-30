import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { อีเมล:'',ชื่อ:'', อายุ:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____รายละเอียดของคุณ____\n
	อีเมล : ${email}
	ชื่อ : ${name}
	อายุ : ${age}
	ที่อยู่ : ${address}
	เบอร์โทรศัพท์ : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>อีเมล</label>
		<input
			name='email'
			placeholder='อีเมล'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>ชื่อ</label>
		<input
			name='name'
			placeholder='ชื่อ'
			value={this.state.name}
			onChange={this.handleChange}
            />
		</div>
		<div>
		<label htmlFor='name'>นามสกุล</label>
		<input
			name='name'
			placeholder='นามสกุล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>อายุ</label>
		<input
			name='age'
			placeholder='อายุ'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>ที่อยู่</label>
		<input
			name='address'
			placeholder='ที่อยู่'
			value={this.state.address}
			onChange={this.handleChange}
            />
		</div>
		<div>
		<label htmlFor='address'>ชื่อเล่น</label>
		<input
			name='address'
			placeholder='ชื่อเล่น'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>เบอร์โทรศัพท์</label>
		<input
			name='phoneNo'
			placeholder='เบอร์โทรศัพท์'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>เสร็จสิ้น</button>
		</div>
	</form>
	)
}
}

export default Form