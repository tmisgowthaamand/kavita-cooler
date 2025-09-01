import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ArrowLeft, CheckCircle, XCircle, Package, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const CancelOrder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cancellationCompleted, setCancellationCompleted] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const orderId = searchParams.get('orderId') || '';

  // Sample order data - in real app, this would come from API
  const sampleOrders = {
    'KCH1234567890123': {
      id: 'KCH1234567890123',
      date: '2025-01-25',
      status: 'Processing',
      total: 87997,
      items: [
        {
          id: 1,
          name: 'Godrej 1.5 Ton 5 Star Split AC',
          brand: 'Godrej',
          price: 35999,
          quantity: 1,
          image: '/godrej.jpg'
        },
        {
          id: 2,
          name: 'Bosch 345L Double Door Refrigerator',
          brand: 'Bosch',
          price: 52999,
          quantity: 1,
          image: '/bosch ref.jpg'
        }
      ],
      shipping: {
        address: '123 Main Street, Mumbai, Maharashtra 400001',
        method: 'Standard Delivery',
        cost: 0
      }
    },
    'KCH9876543210987': {
      id: 'KCH9876543210987',
      date: '2025-01-24',
      status: 'Confirmed',
      total: 34999,
      items: [
        {
          id: 3,
          name: 'Samsung 7kg Front Load Washing Machine',
          brand: 'Samsung',
          price: 34999,
          quantity: 1,
          image: '/samsung washing.jpg'
        }
      ],
      shipping: {
        address: '456 Park Avenue, Delhi, Delhi 110001',
        method: 'Express Delivery',
        cost: 500
      }
    }
  };

  useEffect(() => {
    if (orderId && sampleOrders[orderId as keyof typeof sampleOrders]) {
      setOrderDetails(sampleOrders[orderId as keyof typeof sampleOrders]);
    }
  }, [orderId]);

  const [formData, setFormData] = useState({
    orderId: orderId,
    customerName: "",
    email: "",
    phone: "",
    reason: "",
    comments: ""
  });

  const cancellationReasons = [
    "Changed my mind",
    "Found a better price elsewhere", 
    "Ordered by mistake",
    "Delivery time too long",
    "Product no longer needed",
    "Technical issues with product",
    "Financial reasons",
    "Other"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    return formData.orderId.trim() !== '' && 
           formData.customerName.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.phone.trim() !== '' && 
           formData.reason.trim() !== '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate cancellation processing
    setTimeout(() => {
      setCancellationCompleted(true);
      setIsProcessing(false);
      
      toast({
        title: "Cancellation Request Submitted",
        description: `Your cancellation request for order ${formData.orderId} has been submitted successfully.`,
      });
    }, 2000);
  };

  if (cancellationCompleted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Cancellation Request Submitted</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Your order cancellation request has been submitted successfully. We'll process your request within 24 hours.
            </p>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Order ID:</span>
                      <span className="font-mono text-primary">{formData.orderId}</span>
                    </div>
                    {orderDetails && (
                      <div className="flex justify-between">
                        <span className="font-semibold">Order Total:</span>
                        <span className="font-bold text-primary flex items-center">
                          <IndianRupee className="h-4 w-4" />
                          {orderDetails.total.toLocaleString('en-IN')}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-semibold">Reason:</span>
                      <span>{formData.reason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Status:</span>
                      <span className="text-yellow-600 font-semibold">Under Review</span>
                    </div>
                  </div>

                  {/* Cancelled Products Display */}
                  {orderDetails && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Package className="h-4 w-4 text-primary" />
                        Cancelled Products ({orderDetails.items.length} item{orderDetails.items.length > 1 ? 's' : ''})
                      </h4>
                      <div className="grid gap-4">
                        {orderDetails.items.map((item: any) => (
                          <div key={item.id} className="flex items-center gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg border-2 border-red-300"
                            />
                            <div className="flex-1">
                              <h5 className="font-semibold text-secondary">{item.name}</h5>
                              <p className="text-sm text-muted-foreground">{item.brand}</p>
                              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-lg text-red-600 flex items-center">
                                <IndianRupee className="h-4 w-4" />
                                {item.price.toLocaleString('en-IN')}
                              </p>
                              <p className="text-xs text-red-500">Refund Amount</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Total Refund Amount */}
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-green-800">Total Refund Amount:</span>
                          <span className="text-2xl font-bold text-green-600 flex items-center">
                            <IndianRupee className="h-5 w-5" />
                            {orderDetails.total.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-sm text-muted-foreground p-4 bg-muted rounded-lg">
                    <p><strong>What happens next?</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Our team will review your cancellation request</li>
                      <li>You'll receive an email confirmation within 24 hours</li>
                      <li>If approved, refund will be processed within 5-7 business days</li>
                      <li>You can track the status by calling our support team</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/shop')}>
                Continue Shopping
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="p-0 h-auto">
            <ArrowLeft size={16} className="mr-1" />
            Back
          </Button>
          <span>/</span>
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <span className="text-foreground">Cancel Order</span>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <XCircle size={60} className="text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Cancel Your Order</h1>
            <p className="text-lg text-muted-foreground">
              We're sorry to see you want to cancel your order. Please fill out the form below and we'll process your request.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={20} />
                Order Cancellation Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Order Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary">Order Information</h3>
                  
                  <div>
                    <Label htmlFor="orderId">Order ID *</Label>
                    <Input
                      id="orderId"
                      value={formData.orderId}
                      onChange={(e) => {
                        handleInputChange("orderId", e.target.value);
                        // Check if order exists when typing
                        const order = sampleOrders[e.target.value as keyof typeof sampleOrders];
                        if (order) {
                          setOrderDetails(order);
                        } else {
                          setOrderDetails(null);
                        }
                      }}
                      placeholder="Enter your order ID (e.g., KCH1234567890123)"
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      You can find your order ID in the confirmation email. Try: KCH1234567890123 or KCH9876543210987
                    </p>
                  </div>

                  {/* Order Details Display */}
                  {orderDetails && (
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          Order Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Order Summary */}
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Order Date</p>
                            <p className="font-semibold">{new Date(orderDetails.date).toLocaleDateString('en-IN')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Status</p>
                            <Badge variant={orderDetails.status === 'Processing' ? 'default' : 'secondary'}>
                              {orderDetails.status}
                            </Badge>
                          </div>
                        </div>

                        {/* Products */}
                        <div>
                          <p className="text-sm font-semibold mb-3">Products ({orderDetails.items.length} item{orderDetails.items.length > 1 ? 's' : ''})</p>
                          <div className="space-y-3">
                            {orderDetails.items.map((item: any) => (
                              <div key={item.id} className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-sm">{item.name}</h4>
                                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-primary flex items-center">
                                    <IndianRupee className="h-3 w-3" />
                                    {item.price.toLocaleString('en-IN')}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Order Total */}
                        <div className="border-t pt-3">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total Amount</span>
                            <span className="text-xl font-bold text-primary flex items-center">
                              <IndianRupee className="h-4 w-4" />
                              {orderDetails.total.toLocaleString('en-IN')}
                            </span>
                          </div>
                          {orderDetails.shipping.cost > 0 && (
                            <div className="flex justify-between items-center text-sm text-muted-foreground mt-1">
                              <span>Shipping</span>
                              <span className="flex items-center">
                                <IndianRupee className="h-3 w-3" />
                                {orderDetails.shipping.cost.toLocaleString('en-IN')}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Shipping Address */}
                        <div>
                          <p className="text-sm font-semibold mb-1">Shipping Address</p>
                          <p className="text-sm text-muted-foreground">{orderDetails.shipping.address}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {formData.orderId && !orderDetails && formData.orderId.length > 5 && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-700">
                        Order not found. Please check your order ID and try again.
                      </p>
                    </div>
                  )}
                </div>

                {/* Customer Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary">Customer Information</h3>
                  
                  <div>
                    <Label htmlFor="customerName">Full Name *</Label>
                    <Input
                      id="customerName"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Cancellation Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary">Cancellation Details</h3>
                  
                  <div>
                    <Label htmlFor="reason">Reason for Cancellation *</Label>
                    <Select value={formData.reason} onValueChange={(value) => handleInputChange("reason", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason for cancellation" />
                      </SelectTrigger>
                      <SelectContent>
                        {cancellationReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>{reason}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comments">Additional Comments</Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => handleInputChange("comments", e.target.value)}
                      placeholder="Please provide any additional details about your cancellation request..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 mt-0.5" size={20} />
                    <div className="text-sm">
                      <p className="font-semibold text-amber-800 mb-2">Important Notice:</p>
                      <ul className="text-amber-700 space-y-1 list-disc list-inside">
                        <li>Cancellation requests are processed within 24 hours</li>
                        <li>Orders that have already shipped cannot be cancelled</li>
                        <li>Refunds will be processed to the original payment method</li>
                        <li>Processing time for refunds is 5-7 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="flex-1"
                  >
                    Go Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isProcessing || !validateForm()}
                    className="flex-1"
                    variant="destructive"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <XCircle size={16} className="mr-2" />
                        Submit Cancellation Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CancelOrder;
