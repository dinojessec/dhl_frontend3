<template>

  <div class="container">
    <div class="row">
      <div class="col">

        <div class="card text-center">
          <div class="card-header">
            Payments
          </div>
          <div class="card-body">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Payment Name</th>
                  <th scope="col">Payment type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Cashier</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in values"
                  :key="item.paymentID"
                >
                  <td>{{ item.paymentName }}</td>
                  <td>{{ item.paymentType }}</td>
                  <td>{{ item.paymentAmount }}</td>
                  <td>{{ item.paymentDate }}</td>
                  <td>{{ item.cashier }}</td>
                  <td>
                    <button
                      v-if="roleID >= 3"
                      type="button"
                      class="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button></td>
                </tr>
                <hr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Balance: <strong>
                      {{ (tuition - totalPaymentAmount) > 0 ? (
                      tuition - totalPaymentAmount
                      ) :(
                      0
                      ) }}
                    </strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-footer d-flex">
            <!-- <div class="p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add Voucher.."
                  v-model="inputVoucher"
                  v-validate="{ numeric: true }"
                  name="voucher"
                >
                <div class="input-group-append">
                  <button
                    class="input-group-text"
                    id="basic-addon2"
                    @click="addVoucher()"
                  >Add</button>
                </div>
                <div class="err">{{ errors.first('voucher') }}</div>
              </div>
            </div> -->
            <!-- <div class="ml-auto p-2">
              <div
                class="alert alert-success mb-0"
                role="alert"
              >
                {{values.voucherCode}}
              </div>
            </div> -->
          </div>
        </div>

        <!-- modal for add payment/ -->
        <div
          class="row m-3"
          v-if="roleID >= 3"
        >
          <div class="col">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add Payment
            </button>
            <!--  modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="exampleModalLongTitle"
                    >Choose Payment</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body d-flex">
                    <div class="col-4 p-2">
                      <label>Payment Name</label>
                      <select
                        name="payment"
                        id="payment"
                        class="custom-select"
                        v-model="payment.paymentName"
                      >
                        <option value="1">test1</option>
                        <option value="2">test2</option>
                      </select>
                    </div>
                    <div class="col-4 p-2">
                      <label>Payment Type</label>
                      <select
                        name="payment"
                        id="payment"
                        class="custom-select"
                        v-model="payment.paymentType"
                      >
                        <option value="cash">Cash</option>
                        <option value="cheque">Cheque</option>
                      </select>
                    </div>
                    <div class="col-4 p-2">
                      <label>Amount</label>
                      <input
                        type="text"
                        class="form-control"
                        v-validate="{ required: true, decimal:3 }"
                        name="amount"
                        v-model="payment.paymentAmount"
                      >
                      <div class="err">{{ errors.first('amount') }}</div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >Close</button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="validate()"
                    >Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "StudentPayment",
  data() {
    return {
      roleID: localStorage.getItem("roleID"),
      inputVoucher: "",
      payment: {},
      values: [],
      tuition: "",
      totalPaymentAmount: ""
    };
  },
  // TODO: must get payment records from student then display on payment page
  created() {
    const token = localStorage.getItem("token");
    const userID = this.$route.params.userID;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    axios
      .get(
        `http://localhost:3000/api/v1/profile/student-payment/${userID}`,
        config
      )
      .then(val => {
        const totalPayment = val.data.totalAmount;
        const tuition = val.data.tuition;
        const paymentRecord = val.data.resPayment;
        const combine = Object.assign(paymentRecord);
        // this.values = { combine };
        // console.log(combine);
        this.values = combine;
        this.tuition = tuition;
        this.totalPaymentAmount = totalPayment;
      })
      .catch(err => {
        throw err;
      });
  },

  methods: {
    validate() {
      const valid = this.$validator.validateAll().then(result => {
        if (!result) {
          console.log("invalid input. some fields are empty", result);
          // alert("invalid input. some fields are empty");
        } else {
          this.addPayment();
          // this.$router.go();
        }
      });
    },
    addPayment() {
      const data = this.payment;
      const userID = this.$route.params.userID;
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      if (!data) {
        alert("Invalid input");
      } else {
        axios
          .post(
            `http://localhost:3000/api/v1/profile/student-payment/${userID}`,
            { data },
            config
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>

<style scoped>
.err {
  color: #ff0000;
}
</style>
