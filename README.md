UPayC: Payment Gateway Demonstration - Client using Angular+Node+Postgres
===========================
	It is a model of payment gateway created using 'AngularJs' and 'Node-Express'. The data-base is handled in this model by 'postgres'.   

##Steps to be followed:
1. Pull the project

2. Extract, then, within the directory, shoot this command: npm install

3. Modify the Server Details:
	3.a: If you are installing server locally, then:
		Modify: the lines in file `/src/environments/environment.ts` as given below:
			 `serURL:'http://localhost:3001/api/'`
			 `appURL:'http://localhost:4200'`

	3.b: If the server is installed in other system, then:
		Modify: the lines in file `/src/environments/environment.ts` as given below:
			 `serURL:'http://xxx.xx.xx.xxxx:3001/api/'`
			 `appURL:'http://xxx.xx.xx.xxxx:4200'`
		xxx.xx.xx.xxx is the IP address in which you have installed your server.


3. run the server using the command: npm start


4. Move to the link: `http://localhost:4200`

5. How to Test the Payment Gateway
	move to the link: `http://localhost:4200/test`
	Edit this.textDetails in "test.component.ts" with your test-data

Now Our Server is On. Put this together with upay:server application.

