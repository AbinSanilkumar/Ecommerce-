from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, CartViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'cart', CartViewSet, basename='cart')

urlpatterns = router.urls